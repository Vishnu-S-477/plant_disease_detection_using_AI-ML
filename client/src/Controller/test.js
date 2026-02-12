
const SessionVerification = async()=>{
  const response = await fetch("http://localhost:5000/api/SessionVerification",{
     method:"POST",
     headers:{'Content-Type':'application/json'},
      credentials:"include", 
      body:JSON.stringify({session:"check"})
  });
  const serverResponse =await response.text();
  if(serverResponse == "true"){
    console.log("true");
    return true;
  }
  else{
    console.log("false");
    return false;
  }
}
SessionVerification();

