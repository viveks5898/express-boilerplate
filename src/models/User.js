import mongoose from "mongoose";

 const  {Schema, model} = mongoose;

 const userSchema = new Schema({
    name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
 })
  const User = model('User', userSchema)

  export default User