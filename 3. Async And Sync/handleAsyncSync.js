let a=20;
let b=0;


let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(30);
    },3000);
})

waitingData.then((data)=>{
    b=data;
    console.log(b);
})
