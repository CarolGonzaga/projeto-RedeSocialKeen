import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, maxlength: 30, unique: true },
  email: { type: String, required: true, maxlength: 100, unique: true },
  password: { type: String, required: true },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)