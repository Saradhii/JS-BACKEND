const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Mock10 working..")
})

const PORT = process.env.PORT || 8060
app.listen(PORT);

