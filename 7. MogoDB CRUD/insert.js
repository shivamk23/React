const dbConnection=require("./mongodb");

const insert=async()=>{
    const db=await dbConnection();
    const result= await db.insertMany([
        {name:'Narzo-50',brand:'vivo',price:320,category:'mobile'},
        {name:'Narzo-10',brand:'vivo',price:320,category:'mobile'},
        {name:'Narzo-20',brand:'vivo',price:320,category:'mobile'}
    ]
    );
    console.log(result)
}
insert()