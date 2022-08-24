const connection = require("./db/db");
const express = require("express");
const cors = require("cors");
// const FlatRoute = require("./routes/FlatRoute");
// const UserRoute = require("./routes/UserRoute");
const Flat = require("./models/FlatSchema");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000","http://localhost:3001"],
    })
  );
  
// app.use("/flats",FlatRoute);
// app.use("/user",UserRoute);

app.get("/",(req,res)=>{
    res.send("Mock10 working..")
})

app.get("/flats",async(req,res)=>{
    const flats = await Flat.find();
    res.send(flats);
})

const PORT = process.env.PORT || 8060
app.listen(PORT, async () => {
    try {
      await connection;
      console.log("Connected to Database Successfully &");
    } catch (err) {
      console.log(err);
    }
    console.log("Backend is working at http://localhost:8060");
});

