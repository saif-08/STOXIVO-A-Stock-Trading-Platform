const { model } = require("mongoose");
const { UsersSchema } = require("../schemas/UsersSchema");
const bcrypt = require("bcryptjs");
UsersSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});
const User=new model("User",UsersSchema);
module.exports={User};