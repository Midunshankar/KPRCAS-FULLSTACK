const express = require('express');
const connectDB  = require('./config/db');
const Todo = require('./models/todu');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

connectDB();
app.use(express.json());
app.use(express.json());
app. get("/",async (req, res) =>{
    try{
      const data = await Todo.find()
      res.status(200).json(data)
    }catch(error){
    res.send(error)
    }
})
 app.post("/create",async(req, res) =>{
    try{
       const newtodu = new Todo(req.body)
        const data = await newtodu.save()
        res.status(201).json(data)
       
    }catch(error){
        res.send(error)
    }
})
app.put("/update/:id",async (req, res) =>{
    try{
    
        const updatetask = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updatetask)
    }catch(error){
        res.send(error)
    }
   
})
app.delete("/delete/:id",async (req, res) =>{
    try{
 await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"Task Deleted Successfully"
    })
    }catch(error){
        res.send(error)
    }
})
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});