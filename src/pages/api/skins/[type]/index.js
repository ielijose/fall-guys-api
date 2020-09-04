import dbConnect from '../../../../utils/dbConnect'
import Skin from '../../../../models/Skin'

export default async function handler(req, res) {
  await dbConnect()

  const { type } = req.query

  try {
    const skins = await Skin.find({ type })
    res.status(200).json(skins)
  } catch (error) {
    res.status(500).json({ error: true, message: error.message })
  }
}
