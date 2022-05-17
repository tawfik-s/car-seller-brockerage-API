const express = require('express');
const router = express.Router();
const { generateAccessToken } = require("../services/authService")
const jwt = require('jsonwebtoken')

let refreshTokens = []

router.post('/token', (req, res) => {      //refreshtoken
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
})

router.delete('/logout', (req, res) => {           //delete token
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})

router.post('/login', (req, res) => {  //send access token
    const username = req.body.username
    const user = { name: username }   //we will handle this after add the route seller

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
})



module.exports = router;