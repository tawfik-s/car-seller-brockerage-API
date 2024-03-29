const Seller = require('../models/sellerModel');
const { loginfo, logerror } = require('../middlewares/logger');

exports.getSellers = async (req, res) => {
  try {
    const Sellers = await Seller.find();
    loginfo(Sellers);
    res.send(Sellers);
  } catch (err) {
    logerror(err.message);
    res.status(400).send({ message: 'error!' });
  }
};

exports.checkSellerIfExistService = async (user) => {
  const { email } = user;
  const { password } = user;
  const result = await Seller.findOne({ Seller_email: email, Seller_password: password });
  return result;
};

exports.registerSeller = async (req, res) => {
  try {
    const ifExist = await Seller.findOne({ Seller_email: req.body.Seller_email });
    if (ifExist != null) {
      res.status(409).json({ message: 'seller is already exist' });
      res.send();
    } else {
      const seller = new Seller({
        Seller_name: req.body.Seller_name,
        Seller_email: req.body.Seller_email,
        Seller_address: req.body.Seller_address,
        Seller_password: req.body.Seller_password,
      });
      const result = await seller.save();
      loginfo(result);
      res.status(200).send({ message: 'done' });
    }
  } catch (err) {
    logerror(err.message);
    res.status(400).send({ message: 'error!' });
  }
};

exports.DeleteSeller = async (req, res) => {
  try {
    const result = await Seller.deleteOne({ _id: req.params.id });
    loginfo(result);
    res.status(200).send({ message: 'done' });
  } catch (err) {
    logerror(err.message);
    res.status(400).send({ message: 'error!' });
  }
};

exports.updateSeller = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) res.send({ message: 'there is no such item' });
    seller.Seller_name = req.body.Seller_name;
    seller.Seller_email = req.body.Seller_email;
    seller.Seller_address = req.body.Seller_address;
    seller.Seller_password = req.body.Seller_password;
    const result = await seller.save();
    loginfo(result);
    res.status(200).send({ message: 'done' });
  } catch (err) {
    logerror(err.message);
    res.status(400).send({ message: 'error!' });
  }
};

exports.getSellerById = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    loginfo(seller);
    res.send(seller);
  } catch (err) {
    logerror(err.message);
    res.status(400).send({ message: 'error!' });
  }
};
