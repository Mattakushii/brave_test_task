import { NextApiRequest, NextApiResponse } from 'next'

export default function payHandler(req : NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'application/json');
    switch (req.method) {
        case 'POST':
            if(req.body.phoneNumber && req.body.payment && req.body.operatorName) {
                const randRes =  randomInteger(0, 1);
                if(randRes) {
                    setTimeout(() => {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.status(200).json({
                            result: true,
                            message: `Успешно!`
                        });
                    }, 2000);
                } else {
                    setTimeout(() => {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.status(404).json({
                            result: false,
                            message: `Кажется, что то пошло не так..(`
                        });
                    }, 2000)
                }
            } else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(404).json({
                    result: false,
                    message: `Invalid data`
                });
            }
            break;
        default: {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(405).json({
                result: false,
                message: `${req.method} not allowed`});
            break;
        }
    }
}

function randomInteger(min : number, max : number) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}