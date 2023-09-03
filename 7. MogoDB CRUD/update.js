const dbConnection= require('./mongodb')

const update=async ()=>{
    let data=await dbConnection();
    let result=data.updateMany(
        {name:'Narzo-50'},
        {$set:{name:'Apple'}}
    );

}

update();