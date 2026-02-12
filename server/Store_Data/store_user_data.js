const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
async function storeUserData(response){
  const hashed_password = await bcrypt.hash(response.body.password,4);
  console.log("Test"+hashed_password);
 try{
    const user = new userModel({
    name:response.body.name,
    email:response.body.email,
    password:hashed_password,
    location:response.body.location,
    profilePic:"profile.jpg"
      
 });

 await user.save();
 
 return "success";
 }
 catch(e){
  console.log("error store : "+e);
   return "fail reason : "+e;
 }

}



module.exports = storeUserData;