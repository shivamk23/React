const express= require("express");
const path=require("path");


const app=express();
const filePath=path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.sendFile(`${filePath}/index.html`)
})

app.get('/profile',(req,res)=>{
    const user={
        name:'John',
        user:"John Doe",
        email:"john@test.com",
        skills:['php','js','java']
}
res.render('profile',{user})
})

app.get('/login',(_,res)=>{
    res.render('login')
})

app.listen(3000);