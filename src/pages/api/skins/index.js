import dbConnect from '../../../utils/dbConnect'
import Skin from '../../../models/Skin'

export default async function handler(req, res) {
  await dbConnect()

  try {
    const skins = await Skin.find({})
    const skinsMap = skins.reduce((prev, curr) => {
      if (!prev[curr.type]) {
        prev[curr.type] = []
      }
      return {
        ...prev,
        [curr.type]: [...prev[curr.type], curr],
      }
    }, {})
    res.status(200).json(skinsMap)
  } catch (error) {
    res.status(500).json({ error: true, message: error.message })
  }
}
