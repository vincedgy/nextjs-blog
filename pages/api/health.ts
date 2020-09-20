import { NextApiRequest, NextApiResponse } from 'next'

const health = (req, resp) => {
    resp.json({"status":"ok"})
}

export default health