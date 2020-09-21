import { NextApiRequest, NextApiResponse } from 'next'

const health = (req: NextApiRequest, resp: NextApiResponse) => {
    const givenIndex = req.query?.i || "" 
    const index = givenIndex === "" ? Math.ceil(Math.random()*10) : givenIndex

    return fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
      .then(r => r.json())
      .then(data => resp.json({ data }));

}

export default health