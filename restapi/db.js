const mongo=require("mongoose")
mongo.connect("mongodb://127.0.0.1:27017/api",{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false})
.then(()=> console.log("success"))
.catch((e)=> console.log(e))
const mySchema=mongo.Schema({
    name:String,
    roll:Number,
    active:Boolean
})
const MyCollection=mongo.model("MyCollection",mySchema)
module.exports=MyCollection