import express from 'express'

const app=express();



// MIddleware


const middleware=(req,res,next)=>{
    console.log("middlwware")
    next()
}


app.get('/',(req,res)=>{
    res.send("hello world")
});
app.get('/about',middleware,(req,res)=>{
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