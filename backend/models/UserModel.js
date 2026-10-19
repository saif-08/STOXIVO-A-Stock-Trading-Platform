const { model } = require("mongoose");
const { UsersSchema } = require("../schemas/UsersSchema");
const UserModel=new model("UserModel",UsersSchema);
module.exports={UserModel};