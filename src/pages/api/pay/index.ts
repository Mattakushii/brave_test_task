import { NextApiRequest, NextApiResponse } from 'next'

export default function payHandler(req : NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            if(req.body.phoneNumber && req.body.payment && req.body.operatorName) {
                const randRes =  randomInteger(0, 1);
                if(randRes) {
                    setTimeout(() => {
                        res.status(200).json({
                            result: true,
                            message: `Успешно!`
                        });
                    }, 1000);
                } else {
                    setTimeout(() => {
                        res.status(404).json({
                            result: false,
                            message: `Кажется, что то пошло не так..(`
                        });
                    }, 1000)
                }
            } else {
                res.status(404).json({
                    result: false,
                    message: `Invalid data`
                });
            }
            break;
        default: {
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