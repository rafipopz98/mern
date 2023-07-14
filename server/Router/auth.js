const express = require("express");
const router = express.Router();

require("../db/conection");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("hello world");
});
router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(500).json({ error: "cannot be empty" });
  }

  User.findOne({email:email}).then((userExist)=>{
    if(userExist){
        return res.status(500).json({error:'user already exist'})
    }
    const user=new User({name, email, phone, work, password, cpassword })

    user.save().then(()=>{
        res.status(200).json({message:'sucessfulll'})
    }).catch((err)=>{
        res.status(501).json({error:'there seems to be a problem with database',err})
    })
  }).catch((err)=>{console.log("the error is ",err)})
  
});
module.exports = router;
