const HistoryModel = require("../models/History");

async function HistoryFetch(req){
    const email = req.session.email;
    try{
        console.log("Control Came");
   const historyData = await HistoryModel
      .find({ emailId: email })
      .sort({ createdAt: -1 });
     return historyData;
    }
    catch(e){
        return "Error From Retrieveing The Data from History :  "+e;
    }
}

module.exports = HistoryFetch;

