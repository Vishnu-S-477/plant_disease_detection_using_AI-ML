const userModel = require("../models/User");

async function profileViewer(req) {
  try {
    const email = req.session.email;

    console.log(email);
    const userDocument = await userModel.findOne({ email: email });

   
    return userDocument;

  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = profileViewer;