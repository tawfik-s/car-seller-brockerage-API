/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../utils/generateAccessToken');
const { checkSellerIfExistService } = require('./sellerController');
const { loginfo, logerror } = require('../middlewares/logger');

let refreshTokens = [];

exports.refreshTokenController = (req, res) => { // refreshtoken
  try {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateAccessToken({ name: user.name });
      res.json({ accessToken });
    });
  } catch (err) {
    logerror(err.message);
    res.status(403).send({ message: 'refresh token error' });
  }
};

exports.logoutController = (req, res) => { // delete token
  try {
    refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');
    res.sendStatus(204);
  } catch (err) {
    logerror(err.message);
    res.status(400).send({ message: 'logout error' });
  }
};

exports.loginController = async (req, res) => { // send access token
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = { email, password };
    // we will handle this after add the route
    // seller to check password and add user id to the Access token

    const result = await checkSellerIfExistService(user);
    if (result == null) {
      res.status(401).json({ message: 'authentication faulire please register or reenter password' });
    } else {
      loginfo(result);
      user.id = result._id;
      const accessToken = generateAccessToken(user);
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
      refreshTokens.push(refreshToken);
      res.cookie('accessToken', accessToken);
      res.cookie('refreshToken', refreshToken);
      res.send();
      // res.json({ accessToken: accessToken, refreshToken: refreshToken })
    }
  } catch (err) {
    logerror(err.message);
    res.status(401).send({ message: 'authentication failure' });
  }
};
