const Todo = require("../models/TodoSchema");
const Router = require("express");


const TodoRoute = Router();

// add new todo
TodoRoute.post("/newtodo",(req,res)=>{
    const {id,todoTask,todoStatus,todoTag}=req.body;
    const todo = new Todo({id,todoTask,todoStatus,todoTag});
    todo.save().then(()=>{
        res.status(200).send({message:"Todo created successfully"});
    });
})

// get all todos respective to userid
TodoRoute.get("/all/:id", async(req,res)=>{
    const todos = await Todo.find({"id":req.params.id});
    res.status(200).send(todos);
});

TodoRoute.delete("/delete/:id", async(req,res)=>{
    const data = await Todo.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "todo Deleted Succsessfully" });
})

// FlatRoute.post("/byblock",async(req,res)=>{
//     const block = await Todo.find(req.body);
//     res.send(block);
// })

module.exports=TodoRoute;