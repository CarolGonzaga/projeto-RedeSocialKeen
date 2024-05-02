import mongoose from "mongoose";

import User from "../user/user.model"

const PostSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 256 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  createdDate: { type: Date, required: true }
})

export default mongoose.models.Post || mongoose.model("Post", PostSchema)