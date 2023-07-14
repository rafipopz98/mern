import express from 'express'

const app=express();


app.get('/',(req,res)=>{
    res.send("hello world")
});
app.get('/contact',(req,res)=>{
    res.send("hello world from contact")
});
app.get('/about',(req,res)=>{
    res.send("hello world from about")
});
app.get('/footer',(req,res)=>{
    res.send("hello world from footer")
});


 app.listen(3000,()=>{
    console.log("server is running")
 })