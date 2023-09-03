const fs= require('fs');

const input= process.argv;

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}
if(input[2]=='remove' ){
    fs.unlinkSync(input[3])
}
