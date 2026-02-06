const userModel = require("../models/User");
async function storeUserData(response){
 try{
    const user = new userModel({
    name:response.body.name,
    email:response.body.email,
    password:response.body.password,
    location:response.body.location,
    profilePic:response.body.profilePic
      
 });

 await user.save();
 console.log("success store");
 return "success";
 }
 catch(e){
  console.log("error store");
   return "fail reason : "+e;
 }

}

module.exports = storeUserData;