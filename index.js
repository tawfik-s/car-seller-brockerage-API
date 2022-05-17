const express = require("express");
const app = express();
const cors = require("cors");
const car = require('./Routes/carRouter');
//const seller = require('./Routes/seller');
const logger = require('./middleware/logger')

//my-middleware
app.use(cors());
app.use(express.json());
//app.use(logger);


app.use('/car', car);
//app.use('/seller', seller);


//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running on port 3000")
});
