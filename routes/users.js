import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = []

router.get('/', (req, res) => {
    res.send(users)
});

router.post( '/' , (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4()})
    res.send(`User with the name ${user.firstName} was added!`);
});

router.get('/:id', (req, res) => {
    res.send("the get id route")
});

export default router;