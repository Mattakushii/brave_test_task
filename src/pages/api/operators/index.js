import db from "../../../../public/db.json";

export default function getUsers(req, res) {
    res.status(200).json(db)
}