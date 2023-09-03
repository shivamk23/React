const { dir } = require('console');
const fs= require('fs');
const path=require("path");
const dirPath= path.join(__dirname,'CRUD');

//Write Files
// fs.writeFileSync(`${dirPath}/file1.txt`,"Am file one");


//Read Files
// fs.readFile(`${dirPath}/file1.txt`,"UTF-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//        console.log(data)
//     }
// })

//Update file
// fs.appendFile(`${dirPath}/file1.txt`," okay fle is updated",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file is updated")
//     }
// })

//Rename file
// fs.rename(`${dirPath}/file1.txt`,`${dirPath}/file2.txt`,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file is updated")
//     }
// })

//Delete file
// fs.unlink(`${dirPath}/file2.txt`,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file is deleted")
//     }
// });

 