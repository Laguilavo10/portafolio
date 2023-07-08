export default async function handler(req, res) {
  if (req.method === 'GET') {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          `${process.env.API_KEY}:${process.env.API_SECRET}`
        ).toString('base64')})}`
      },
      body: JSON.stringify({ expression: 'folder=Certifications/*' })
    }

    try {
      const data = await fetch(process.env.URL_API, options)
      const response = await data.json()
      const images = response.resources.splice(0, 5)
      res.status(200).json({ data: images })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: error })
    }
  }
}
