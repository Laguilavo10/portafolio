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
      body: JSON.stringify({
        expression:
          'folder=Certifications/lagui2003@gmail.com AND aspect_ratio>=1',
        max_results: 5
      })
    }

    try {
      const data = await fetch(process.env.URL_API, options)
      const response = await data.json()
      res.status(200).json({ data: response.resources })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: error })
    }
  }
}
