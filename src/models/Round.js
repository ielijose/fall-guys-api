import mongoose from 'mongoose'

const RoundSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    goal: { type: String },
    size: { type: String, required: true },
    type: { type: String, required: true },
    designer: { type: String, required: true },
    previewImage: { type: String, required: true },
    socialShareImage: { type: String, required: true },
    blurredBackground: { type: String, required: true },
    video: { type: String, required: true },
  },
  { versionKey: false },
)

export default mongoose.models.Round || mongoose.model('Round', RoundSchema)
