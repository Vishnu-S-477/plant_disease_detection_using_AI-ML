const express = require("express");
const cors = require("cors");
const Signup = require("./controllers/Signup")
const Login = require("./controllers/Login")
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server Is Running");
});

app.post("/api/test",async (req,res)=>{
 let response =   await Signup(req);
   res.send(response);
});

app.post("/api/Login",async (req,res)=>{
   
let response = await Login(req);
res.send(response);
});

module.exports = app;