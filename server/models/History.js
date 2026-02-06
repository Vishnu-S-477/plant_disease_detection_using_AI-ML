const mongoose = require("mongoose");
const plantSchema = new mongoose.Schema({
    emailId:String,
    pictue:String,
    date:Date.now,
    diseaseName:String
});
 module.exports =  mongoose.model("Plant",plantSchema);