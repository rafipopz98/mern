const express = require("express");
const dotenv = require("dotenv");

const app = express();
// DATABASE
dotenv.config({
  path: './config.env',
});
require("./db/conection");
// const User=require('./models/model')



const PORT = process.env.PORT;

// MIddleware

// const middleware=(req,res,next)=>{
//     console.log("middlwware")
//     next()
// }

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/about", (req, res) => {
  res.send("hello world from about");
});
app.get("/contact", (req, res) => {
  res.send("hello world from contact");
});
app.get("/signin", (req, res) => {
  res.send("hello world from sign in");
});
app.get("/signup", (req, res) => {
  res.send("hello world from signup");
});

app.listen(PORT, () => {
  console.log(`server is runningon port ${PORT}`);
});
