const express = require("express");
const cors = require("cors");
const session = require("express-session");
const Signup = require("./controllers/Signup")
const Login = require("./controllers/Login")
const sessionVerification = require("./controllers/SessionVerification");
const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

app.use(
  session({
    secret: "abc123",
    resave: false,
    saveUninitialized: false,

    cookie: {
      maxAge: null,
      
    }
  })
);

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

app.post("/api/SessionVerification",(req,res)=>{
 const result =    sessionVerification(req);
  res.send(result);
});

module.exports = app;