const express = require("express");
const router = express.Router();

require("../db/conection");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("hello world");
});

// using promisses

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(500).json({ error: "cannot be empty" });
//   }

//   User.findOne({email:email}).then((userExist)=>{
//     if(userExist){
//         return res.status(500).json({error:'user already exist'})
//     }
//     const user=new User({name, email, phone, work, password, cpassword })

//     user.save().then(()=>{
//         res.status(200).json({message:'sucessfulll'})
//     }).catch((err)=>{
//         res.status(501).json({error:'there seems to be a problem with database',err})
//     })
//   }).catch((err)=>{console.log("the error is ",err)})

// });

// using async,await

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(500).json({ error: "cannot be empty" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(500).json({ error: "user already exist" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    const save = await user.save();
    {
      save
        ? res.status(200).json({ msg: "success" })
        : res.status(500).json({ err: "error" });
    }
  } catch (err) {
    console.log("the err is ", err);
  }
});

// signin

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({ err: "cannot be empty" });
  } 
  try{
  
   const userExist = await User.findOne({ email: email });
    {
      userExist
        ? res.status(200).json({ msg: "succesfully logged in" })
        : res.status(500).json({ err: "error" });
    }
}catch(err){
  console.log(err)
}
});

module.exports = router;
