const userModel = require("../models/User");
const fs = require("fs");
const ProfileModifier =async  (req,extension)=>{
  console.log("testing : "+req.body.isImage);
  if(req.body.isImage == 'true'){
    console.log("Control Come to image upload");
const buffer = fs.readFileSync(req.file.path);
    const base64 = buffer.toString("base64");
     const result = await userModel.findOneAndUpdate({ email: req.session.email },  
      {
        
        profilePic: base64,
        extension: extension,
        location:req.body.location,
        name:req.body.name
      },
      { new: true }   // return updated document
    );

   

     if(result){
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
  else{
       console.log("wrong");
          console.log(req.body.name);
          console.log(req.session.email);
      const result = await userModel.findOneAndUpdate({ email: req.session.email },  
      {
     
        location:req.body.location,
        name:req.body.name
      },
      { new: true }   
    );

   
     if(result){
      return "true";
     }
     else{
      return "false";
     }
  }
   
   
 
}


module.exports = ProfileModifier;