
const SessionVerification = async()=>{
  const response = await fetch("http://localhost:5000/api/SessionVerification",{
     method:"POST", 
     headers:{'Content-Type':'application/json'},
      credentials:"include", 
      body:JSON.stringify({session:"check"})
  });
  const serverResponse =await response.text();
  if(serverResponse == "true"){
    return true;
  }
  else{
    return false;
  }
}
export default SessionVerification;
