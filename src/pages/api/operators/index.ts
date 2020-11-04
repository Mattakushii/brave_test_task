import db from "../../../../public/db.json";
import { NextApiRequest, NextApiResponse } from 'next'

export default function getUsers(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(db)
}