const Flat = require("../models/FlatSchema");
const Router = require("express");


const FlatRoute = Router();

FlatRoute.get("/all", async(req,res)=>{
    const flats = await Flat.find();
    res.send(flats);
});

FlatRoute.get("/singleflat/:id", async(req,res)=>{
    const singleflat = await Flat.find({"_id":req.params.id});
    res.send(singleflat);
})

FlatRoute.post("/byblock",async(req,res)=>{
    const block = await Flat.find(req.body);
    res.send(block);
})

module.exports=FlatRoute;