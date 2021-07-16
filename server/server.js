const express=require("express")
const {request,response} =require("express")
const app=express()
app.use(express.json())  ///Mandatory for request.body object
var list=[
    {
        id:1,
        name:"rfd"
    },
    {
        id:2,
        name:"embedded"
    }
]
const  data=require("./data")
app.get("/list",(request,response)=>
{
    //console.log(data.arr)
    response.send(list)
})
app.get("/lis",(request,response)=>
{   
   const newobj={
        id:3,
        name:"kdt"
    }
    data.arr.push(newobj)
    console.log(data.arr)
    response.send(data.arr)
})
app.get("/liss",(request,response)=>
{   
   data.arr.map((item)=>
   {
       if(item.id===2)
       {
           item.name="kdt"
       }
   })
   console.log(data.arr)
   response.send(data.arr)
})
app.post("/list",(request,response)=>
{
    const course =request.body
    list.push(course)
    response.send(list)
})
app.put("/list/:id",(request,response)=>
{
    list.map((item)=> {
        if(item.id==parseInt(request.params.id))
        item.name=request.body.name
    })
    
    response.json(list)
})
app.listen(5000)