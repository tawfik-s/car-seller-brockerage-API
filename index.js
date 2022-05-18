const express = require("express");
const app = express();
const cors = require("cors");
const carRouter = require('./routes/carRouter');
const authRouter = require('./routes/authRouter')
//const seller = require('./Routes/seller');
const logger = require('./middleware/logger')
require('dotenv').config()
//my-middleware
app.use(cors());
app.use(express.json());
//app.use(logger);


app.use('/car', carRouter);
app.use('/auth', authRouter);
//app.use('/seller', seller);


//port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server is running on port 3000")
});
