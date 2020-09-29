export default async function handler(req, res) {
  res.status(200).json({
    rounds: 'https://fallguysapi.com/api/rounds',
    skins: 'https://fallguysapi.com/api/skins'
  });
}
