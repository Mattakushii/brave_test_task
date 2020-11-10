import db from "../../../../public/db.json";
import { NextApiRequest, NextApiResponse } from 'next'

export default function personHandler({ query: { operatorLink } }: NextApiRequest, res: NextApiResponse) {
  const filtered = db.filter((p) => p.operatorLink === operatorLink)
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (filtered.length > 0) {
    setTimeout(()=> {
      res.status(200).json({
        data: filtered[0],
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