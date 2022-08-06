const express = require('express');

const app = express();
const cors = require('cors');
const carRouter = require('./routes/carRouter');
const authRouter = require('./routes/authRouter');
const seller = require('./routes/sellerRouter');
const logger = require('./middlewares/logger');
const { loginfo } = require('./middlewares/logger');

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(logger);

// routes
app.use('/car', carRouter);
app.use('/auth', authRouter);
app.use('/seller', seller);

// port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  loginfo('server is running on port 3000');
});
