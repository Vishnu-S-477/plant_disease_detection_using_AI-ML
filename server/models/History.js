const mongoose = require("mongoose");
const plantSchema = new mongoose.Schema({
    emailId:String,
    pictue:String,
    date:Date,
    diseaseName:String,
    extension:String
});
 module.exports =  mongoose.model("Plant",plantSchema);