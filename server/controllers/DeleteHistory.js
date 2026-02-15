const User = require("../models/History");

async function deleteUser(req) {
  try {
    console.log("Server Received id : "+req.body.delete_id);
    const deleted = await User.findByIdAndDelete(req.body.delete_id);

    if (!deleted) {
      return("User not found");
    } else {
      return("User deleted Successfully");
    }

  } catch (err) {
    return("Error:", err.message);
  }
}

module.exports = deleteUser;
