const { publicDecrypt } = require("crypto");
const express = require("express");
const path= require("path");

const app=express();
const filepath=path.join(__dirname,'public');
console.log(filepath)

app.get('/',(req,res)=>{
    res.sendFile(`${filepath}/index.html`);
})

app.get('/about',(req,res)=>{
    res.sendFile(`${filepath}/about.html`);
})

app.get('*',(req,res)=>{
    res.sendFile(`${filepath}/error.html`);
})



//static handles all the file loading and prevents path traversal attacks.
// app.use(express.static(filepath));

app.listen(3000);