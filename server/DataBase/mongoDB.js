
const mongoose = require("mongoose");
require("dotenv").config({ path: "./Environment.env"});
let dbConnection = null;
const dataBase =async ()=>{



  try{
   dbConnection =  await  mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully ✅");
  }
  catch(e){
    console.log("Error Happened Reason is : "+e)
  }
  
}
dataBase();

 module.exports = dbConnection;