const Todo = require("../models/TodoSchema");
const Router = require("express");


const TodoRoute = Router();

TodoRoute.post("/newtodo",(req,res)=>{
    const {id,todoTask,todoStatus,todoTag}=req.body;
    const todo = new Todo({id,todoTask,todoStatus,todoTag});
    todo.save().then(()=>{
        res.send({message:"Todo created successfully"});
    });
})

TodoRoute.get("/all/:id", async(req,res)=>{
    const todos = await Todo.find({"id":req.params.id});
    res.send(todos);
});

// FlatRoute.get("/singleflat/:id", async(req,res)=>{
//     const singleflat = await Todo.find({"_id":req.params.id});
//     res.send(singleflat);
// })

// FlatRoute.post("/byblock",async(req,res)=>{
//     const block = await Todo.find(req.body);
//     res.send(block);
// })

module.exports=TodoRoute;