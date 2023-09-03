const dbConnection=require('./mongodb')

// dbConnection().then((res)=>{
//     res.find({name:'F 23'}).toArray().then((data)=>{
//         console.log(data)
//     })
// })

// console.log(dbConnection())

const main =async ()=>{
    let data = await dbConnection();
    data=await data.find().toArray();
    console.log(data)
}

main()