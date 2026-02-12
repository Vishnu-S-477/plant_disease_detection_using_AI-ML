function SessionVerification(request){
    if(request.session.email){
        return "true";
    }
    else{
        return "false";
    }
}

module.exports = SessionVerification;