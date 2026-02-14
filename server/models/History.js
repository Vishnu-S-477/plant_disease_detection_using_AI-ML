const mongoose = require("mongoose");
const plantSchema = new mongoose.Schema({
    emailId:String,
    picture:String,
    date:Date,
    diseaseName:String,
    extension:String
});
 module.exports = mongoose.model.Plant||mongoose.model("Plant",plantSchema);


 //mongoose.model.User|| mongoose.model("User",userSchema);