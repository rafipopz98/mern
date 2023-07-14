const express = require("express");
const dotenv = require("dotenv");

const app = express();
// DATABASE
dotenv.config({
  path: './config.env',
});
require("./db/conection");

// const User=require('./models/model')

app.use(express.json())

app.use(require('./Router/auth'))

const PORT = process.env.PORT;

// MIddleware

// const middleware=(req,res,next)=>{
//     console.log("middlwware")
//     next()
// }



app.listen(PORT, () => {
  console.log(`server is runningon port ${PORT}`);
});
