import dbConnect from '../../../utils/dbConnect'
import Round from '../../../models/Round'

export default async function handler(req, res) {
  await dbConnect()

  const { id } = req.query

  try {
    const round = await Round.findById(id)
    if (!round) {
      return res.status(404).json({ error: true, message: 'Not found.' })
    }
    res.status(200).json(round)
  } catch (error) {
    res.status(500).json({ error: true, message: error.message })
  }
}
