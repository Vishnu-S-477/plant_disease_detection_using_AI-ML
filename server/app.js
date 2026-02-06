const express = require("express");
const cors = require("cors");
const userData = require("./Store_Data/store_user_data")
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server Is Running");
});

app.post("/api/test",async (req,res)=>{
   await  userData(req);
   res.send("Working");
});


module.exports = app;