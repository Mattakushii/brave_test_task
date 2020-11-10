import db from "../../../../public/db.json";
import { NextApiRequest, NextApiResponse } from 'next'

export default function getUsers(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(db)
}