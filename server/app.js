import express from 'express'
import mongoose from 'mongoose'
const app=express();

// DATABASE

const DB='mongodb+srv://rafi:rafi@cluster0.yfjisy3.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
    console.log("connection successfull")
}).catch((err)=>console.log('the error is ',err))
// MIddleware


// const middleware=(req,res,next)=>{
//     console.log("middlwware")
//     next()
// }


app.get('/',(req,res)=>{
    res.send("hello world")
});
app.get('/about',(req,res)=>{
    res.send("hello world from about")
});
app.get('/contact',(req,res)=>{
    res.send("hello world from contact")
});
app.get('/signin',(req,res)=>{
    res.send("hello world from sign in")
});
app.get('/signup',(req,res)=>{
    res.send("hello world from signup")
});


 app.listen(3000,()=>{
    console.log("server is running")
 })