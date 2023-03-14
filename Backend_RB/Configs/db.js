const mongoose = require("mongoose")
const connect = () =>{
    console.log("Connected to the local database")
    return mongoose.connect("");
  }
  
  
  module.exports = connect;