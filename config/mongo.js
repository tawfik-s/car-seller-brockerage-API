const mongoose = require('mongoose');
const { loginfo, logerror } = require('../middlewares/logger');

mongoose.connect('mongodb://localhost/CarBrockerage')
  .then(() => loginfo('connected to mongodb'))
  .catch(() => logerror("can't connect to mongodb"));

module.exports = mongoose;
