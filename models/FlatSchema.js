const { Schema, model} = require("mongoose");

const FlatSchema = ({
   img:String,
   no_of_residents:String,
   type:String,
   block:String,
   flat_no:Number,
});

const Flat = model("flats",FlatSchema);

module.exports = Flat;