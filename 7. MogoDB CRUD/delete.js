const dbConnection=require('./mongodb');

const dataDelete= async()=>{
    const data=await dbConnection();
    const result= data.deleteMany(
        {name:'Apple'}
    )
}
dataDelete();