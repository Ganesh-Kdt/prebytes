const mongo=require("mongoose")
mongo.connect("mongodb://127.0.0.1:27017/mydb",{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=> console.log("successfull"))
.catch((err)=> console.log(err))
const mySchema = new mongo.Schema({
    name:String,
    roll:Number,
    active:Boolean,
    lastname:{
        type:String,
        default:"kdt",
    }
})
const MyCollection = new mongo.model("MyCollection",mySchema)

const createDocument= async()=>
{
    /*
    try
    {
        const car1=new MyCollection({
            name:"ganesh",
            roll:30,
            active:true
        })
        const car2=new MyCollection({
            name:"dinesh",
            roll:31,
            active:false
        })
        const car3=new MyCollection({
            name:"kdt",
            roll:32,
            active:true
        })
        const result=await MyCollection.insertMany([car1,car2,car3]) //To insert many documents
    }
    */
    /*
    try
    {
       const result = await MyCollection.find({name:"ganesh"}).select({name:1,_id:0}).limit(1)
       console.log(result)
    }*/
    try
    {
        // const result= await MyCollection.find({roll:{$gte:31},name:"dinesh"}) //gte 31 and name should be dinesh
      // const result=await MyCollection.find({roll:{$in:[31,32]}}).select({name:1,_id:0}) //roll should be 31 or 32 i.e. it should match anyone or all from the array
      //  const result=await MyCollection.find({$or:[{lastnmae:"kdt"},{active:true}]}).countDocuments()
      // const result=await MyCollection.find({$or:[{lastname:"kdt"},{active:true}]}).sort({active:1,name:-1})
     // const result= await MyCollection.findOneAndUpdate({active:false},{$set:{name:"ronaldo",lastname:"messi"}},{useFindAndModify:false}) //updateOne,updateMany
     //const result=await MyCollection.deleteOne({$or:[{lastname:"messi"}]}) //similarly deleteMany
     console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}
createDocument()