import dbConnect from '../../../../utils/dbConnect'
import Skin from '../../../../models/Skin'

export default async function handler(req, res) {
  await dbConnect()

  const { id, type } = req.query

  try {
    const skin = await Skin.findOne({ _id: id, type })
    if (!skin) {
      return res.status(404).json({ error: true, message: 'Not found.' })
    }
    res.status(200).json(skin)
  } catch (error) {
    res.status(500).json({ error: true, message: error.message })
  }
}
