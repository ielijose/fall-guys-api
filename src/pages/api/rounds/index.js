import dbConnect from '../../../utils/dbConnect'
import Round from '../../../models/Round'

export default async function handler(req, res) {
  await dbConnect()

  try {
    const rounds = await Round.find({})
    res.status(200).json(rounds)
  } catch (error) {
    res.status(500).json({ error: true, message: error.message })
  }
}
