const User = require("../models/UserSchema");
const jwt = require("jsonwebtoken");
const Router = require("express");
const crypto = require("node:crypto");
const UserRoute = Router();


//Manager signup
UserRoute.post("/signup",(req,res)=>{
    const {name,email,password}=req.body;
    const hash = crypto.pbkdf2Sync(password,"SECRETSALT",60,64,"sha256").toString("hex");
    const user = new User({name,email,hash});
    user.save().then(()=>{
        res.send({message:"User created successfully"});
    });
})


UserRoute.get("/all",async(req,res)=>{
    const users = await User.find();
    res.send(users);
});

//Manager login
UserRoute.post("/signin",async(req,res)=>{
    const {email , password} = req.body;
    const user = await User.findOne({email});
    const hash = crypto.pbkdf2Sync(password,"SECRETSALT",60,64,"sha256").toString("hex");
    if(hash !== user?.hash)
    {
        return res.send({message:"invalid cresentials"});
    }
    const token = jwt.sign({name:user?.name},'SECRET1234',{expiresIn: "30min"},);
    res.send({message: 'Logged in',token,user});
});

module.exports=UserRoute;