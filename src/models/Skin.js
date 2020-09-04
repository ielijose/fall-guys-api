import mongoose from 'mongoose'

const SkinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String, required: true },
    icon: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    rarity: { type: String, required: true },
    acquire: { type: String, required: true },
    description: { type: String, required: true },
  },
  { versionKey: false },
)

export default mongoose.models.Skin || mongoose.model('Skin', SkinSchema)
