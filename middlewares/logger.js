const winston = require('winston');
const moment = require('moment');

const log = winston.createLogger(
  {
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({
        filename: './logs/info.log',
      }), // ,
      // new winston.transports.Console()
    ],
  },
  {
    level: 'error',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({
        filename: './logs/error.log',
      }), // ,
      // new winston.transports.Console()
    ],
  },
);

exports.logger = (req, res, next) => {
  log.info(`${moment().format()} : ${req.protocol} : ${req.get('host')} : ${req.originalUrl}`);
  next();
};

exports.loginfo = (message) => {
  log.info(message);
};

exports.logerror = (message) => {
  log.error(message);
};
