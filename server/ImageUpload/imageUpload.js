const historyModel = require("../models/History");
const fs = require("fs");
const imageUpload =async  (req,extension)=>{
   const buffer = fs.readFileSync(req.file.path);
    const base64 = buffer.toString("base64");
    const history = new historyModel({
          emailId:req.session.email,
    picture:base64,
    date: new Date(),
    diseaseName:"disease",
    extension:extension
    });

    const imageUploadResponse  =  await history.save();
    if(imageUploadResponse){
      return "true";
    }
    else{
      return "false";
    }
 
}


module.exports = imageUpload;