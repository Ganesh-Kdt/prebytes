const collection=require("./db.js")
const express=require("express")
const app= express()
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.get("/users",async(req,res)=>
{
    try{
    //const id=req.params.id
    //const result = await collection.find({_id:id})
    const result = await collection.find()
    console.log(result)
    res.send(result)
    }
    catch(e)
    {
        res.send(e)
    }
})
app.post("/users",(req,res)=>
{
    console.log(req.body)
    const c1=new collection(req.body)
    collection.insertMany([c1])
    res.send(c1)
    //const c1=new collection(req.body)
})
app.patch("/users/:name",async(req,res)=>
{
    try
    {
    const name=req.params.name
    const result=await collection.findOneAndUpdate({name:name},{$set:req.body})
    console.log(result)
    res.send(result)
    }
    catch(e)
    {
        console.log(e)
    }
})
app.delete("/users/:name",async(req,res)=>
{
    try
    {
        const name=req.params.name
        console.log(name)
        const result=await collection.deleteMany({name:name})
        console.log(result)
        res.send(result)
    }
    catch(e)
    {
        console.log(e)
    }
})
app.listen(8000)