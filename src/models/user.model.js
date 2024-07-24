import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String, // cloud image
    required: true,
  },
  coverImage: {
    type: String, // cloud image
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    }
  ],
  password : {
    type: String,
    required : [true , "password is required"]
  },
  refreshToken : {
    type : String,
  }
} , {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;