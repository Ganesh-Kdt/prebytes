const express=require("express")
const app=express()
//app.use(express.json())
var cors = require('cors')
app.use(cors())
data=[{
    name:"dinesh"
},
{
    name:"kdt"
}]
app.get("/users",(req,res)=>
{
    res.send(data)
})
app.listen(8000,()=> console.log("success"))