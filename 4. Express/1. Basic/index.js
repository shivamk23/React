const express= require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send('<h1>Am at home page  </h1>   <a href="/about">Am About</a>');
})
app.get("/about",(req,res)=>{
    res.send("am at about page");
})
app.get("/contact",(req,res)=>{
    res.send(` <input type="text" placeholder="John" value=${req.query.name}>`)
})

app.listen(3000);