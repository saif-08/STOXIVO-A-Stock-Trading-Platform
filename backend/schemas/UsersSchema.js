const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new mongoose.Schema ({
   email : {
    type:String,
    required:[true, "Your email address is required"],
    unique:true, 
   },
   username : {
    type:String,
    required:[true, "Your email address is required"],
    
   },
   password : {
    type:String,
    required:[true, "Your email address is required"],
   },
   email : {
    type:String,
    default: new Date(),
  },  
});

module.exports={UsersSchema};