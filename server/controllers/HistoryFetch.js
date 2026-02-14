const HistoryModel = require("../models/History");

async function HistoryFetch(req){
    const email = req.session.email;
    try{
   const historyData = await HistoryModel
      .findOne({ emailId: email })
      .sort({ createdAt: -1 });
     return historyData;
    }
    catch(e){
        return "Error From Retrieveing The Data from History :  "+e;
    }
}

module.exports = HistoryFetch;

