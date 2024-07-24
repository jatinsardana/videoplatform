import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloud img
      required: true,
    },
    thumbNail: {
      type: String, //cloud img
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default : 0
    },
    isPublished : {
      type : Boolean,
      default : true
    },
    owner : {
      type : Schema.Types.ObjectId,
      ref : 'User'
    }
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);
export default Video;
