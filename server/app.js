const express = require("express");
const cors = require("cors");
const session = require("express-session");
const Signup = require("./controllers/Signup")
const Login = require("./controllers/Login")
const imageUpload = require("./ImageUpload/imageUpload");
const sessionVerification = require("./controllers/SessionVerification");
const History = require("./controllers/HistoryFetch");
const DeleteHistory = require("./controllers/DeleteHistory");
const path = require("path");
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

const multer = require("multer");

const upload = multer({
  dest: "uploads/", 
});

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

app.post("/api/imageUpload",upload.single("image"), async (req, res) => {
   const extension = path.extname(req.file.originalname).toLowerCase();
   
    const result = await imageUpload(req,extension);
    res.send(result);
  }
);

app.post("/api/HistoryFetch",async (req,res)=>{
  const Historys = await History(req);
  console.log(Historys);
  res.json(Historys);
});

app.post("/api/DeleteHistory",async(req,res)=>{
 const response = await DeleteHistory(req);
 res.send(response);
});

module.exports = app;