const userModel = require("../models/User");
const userData = require("../Store_Data/store_user_data")
async function SignUpValidation(response){
    const user =await userModel.findOne({email:response.body.email});
    console.log("warning"+user);
    if(user){
        return "already_exist";
    }
    else{
       return userData(response);
    }
}

module.exports = SignUpValidation;