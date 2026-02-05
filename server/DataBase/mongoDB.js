require("dotenv").config({ path: "../Environment.env" });
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Connection failed:", error);
    process.exit(1);
  });
  // console.log("URI:", process.env.MONGO_URI);