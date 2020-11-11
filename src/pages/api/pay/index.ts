import { NextApiRequest, NextApiResponse } from 'next'

export default function payHandler(req : NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const randRes =  randomInteger(0, 1);
    if(randRes) {
        setTimeout(() => {
            res.status(200).json({
                result: true,
                message: `Успешно!`
            });
        }, 2000);
    } else {
        setTimeout(() => {
            res.status(404).json({
                result: false,
                message: `Кажется, что то пошло не так..(`
            });
        }, 2000)
    }
}

function randomInteger(min : number, max : number) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}