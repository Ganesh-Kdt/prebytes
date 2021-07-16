const mongo=require("mongoose")
mongo.connect("mongodb://127.0.0.1:27017/mydb1",{ useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>
{
    console.log("success")
})
.catch((err)=>
{
    console.log(err)
})
const mongoSchema=mongo.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        minlength:8,
        maxlength:20
    },
    roll:{
        type:Number,
        required:true,
        default:1,
        enum:[30,31,32],
        min:30,
        max:35
    },
    active:{
        type:Boolean,
        validate(value)
        {
            if(value!==true)
            throw new Error ("Value is not true")
        }
    }
})
const MyCollection=mongo.model("MyCollection",mongoSchema)
createDocument = async()=>
{
    try
    {
        const c1=new MyCollection({
            name:"GaNeShDiNeSh",
            roll:31,
            active:true
        })
        const result=await MyCollection.insertMany([c1])
        console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}
createDocument()
console.log("yse")