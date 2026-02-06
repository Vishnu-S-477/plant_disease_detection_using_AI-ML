    const mongoose = require("mongoose");

  const userSchema =  new mongoose.Schema({
        name:String,
        email:String,
        password:String,
        location:String,
        profilePic:String,
       
    });

    module.exports =mongoose.model.User|| mongoose.model("User",userSchema);