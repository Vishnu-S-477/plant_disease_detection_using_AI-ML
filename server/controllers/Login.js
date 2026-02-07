const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
async function LoginVerification(request){
 const user =  await userModel.findOne({
    email:request.body.email
   });
console.log(user);
   if(user){
   return await isValidUser(request);
   }
   else{
    return "invalid";
   }
}

async function isValidUser(request){
 const hashedPassword = (await userModel.findOne({email:request.body.email}).select("password")).password;
 if(await bcrypt.compare(request.body.password,hashedPassword)){
    return "valid_user";
 }
 else{
   return "wrong_password";
 }
}

module.exports = LoginVerification;
