import db from "../../../../public/db.json";
import { NextApiRequest, NextApiResponse } from 'next'

export default function personHandler({ query: { operatorLink } }: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const filtered = db.find((p) => p.operatorLink === operatorLink)
  if (filtered) {
    setTimeout(()=> {
      res.status(200).json({
        data: filtered,
        errMessage: '',
        ok: true
      })
    }, 500)  
  } else {
    setTimeout(()=> {
      res.status(404).json({
        data: {},
        errMessage: `Operator with name "${operatorLink}" not found.`,
        ok: false
      })
    }, 500)
  }
}