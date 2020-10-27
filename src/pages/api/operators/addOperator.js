export default function addOperator(req, res) {
    if(req.method === 'POST') {
        setTimeout(()=>{
            res.status(200).json(req.body)
        }, 1000)
    } else {
        setTimeout(()=> {
            res.status(404).json({ message: `Operator with name: ${operatorLink} not found.` })
          }, 500)
    }
}