import mongoose from "mongoose"

const videoSchema = new mongoose.Schema(
  {
    videoFile: String,
    thumbnail: String,

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: String,
    description: String,
    duration: Number,
    views: Number,
    isPublished: Boolean,
  },
  { timestamps: true }
)

export const Video = mongoose.model("Video", videoSchema)
