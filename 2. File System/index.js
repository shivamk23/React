const fs= require("fs");
const path=require("path");
const dirPath=path.join(__dirname,"files")
console.warn(dirPath)
// for(let i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/file${i}.txt`,"working with fs module")
// }

fs.readdir(dirPath,(err,data)=>{
    // if(err){
    //     console.log(err)
    // }
    // else{
    //     console.warn(data)
    // }

    data.forEach((item)=>{
        console.log(item)
    })
})