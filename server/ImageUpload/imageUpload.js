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
       fs.unlink(req.file.path, (err) => {
        if (err) {
          console.log("File delete error:", err);
        } else {
          console.log("Temporary uploaded file deleted");
        }
      });
      return "true";
    }
    else{
      return "false";
    }
 
}


module.exports = imageUpload;