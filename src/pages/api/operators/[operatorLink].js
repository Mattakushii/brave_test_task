import db from "../../../../public/db.json";

export default function personHandler({ query: { operatorLink } }, res) {
  const filtered = db.filter((p) => p.operatorLink === operatorLink)

  if (filtered.length > 0) {
    setTimeout(()=> {
      res.status(200).json(filtered[0])
    }, 500)  
  } else {
    setTimeout(()=> {
      res.status(404).json({ message: `Operator with name: ${operatorLink} not found.` })
    }, 500)
  }
}