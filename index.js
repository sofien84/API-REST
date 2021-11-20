const express= require('express')
const connectDB= require('./DB/connectDB')
const tasks= require('./model/taskModel')
const app =express()
app.use(express.json())
connectDB()

//GET :
app.get("/api/task",async (req, res) => {
    try{
        const data=await tasks.find({}).exec()
        res.json({task:data})
    }catch (error) {
      res.send("get task failed",error)
    }
}) 
//POST : 

app.post('/api/task',(req,res)=>{
    const {name}= req.body
    tasks.create({name},(err)=>{
        err ? res.send("add task failed",err): res.send("add task succeed")
    })
})

//PUT : 
app.put("/api/task/:id", (req, res) => {
    tasks.findByIdAndUpdate(req.params.id, req.body, (err)=>{
        err?res.json({msg:"update task failed"}):res.json({msg:"update task succeed"})
    })
})
// //DELETE : 
app.delete("/api/task/:id", (req, res) => {
    tasks.findOneAndDelete(req.params.id, (err)=>{ 
        err?res.json({msg:"delete task failed"}):res.json({msg:"delete task succeed"}) 
    })
})
const port = process.env.PORT||3000
app.listen(port,(err)=> err?console.log(`server run failed`): console.log(`server is runing on port ${port}`))


