const mongoose =require("mongoose");
mongoose
.connect("mongodb://localhost:27017/addDATA")
.then(()=>{
    console.log("Connected to the database successfully!");
    
})
.catch((error)=>{
    console.error("Connected to the database successfully!",error);
});
nameSchema = new mongoose.Schema({
    name: String,
    password: String
});
module.exports=mongoose.model("Data",nameSchema);
