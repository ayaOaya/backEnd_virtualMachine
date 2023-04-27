import express from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js";
import mongoose from "mongoose";

const app = express();

const PORT = 5000;

mongoose.connect('mongodb://localhost/users')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use('/users', usersRoute)

app.use(bodyParser.json());


app.get("/", (req, res) => {
    console.log("this is a text")
    res.send("hello there")
})

app.listen(PORT, () => console.log(`Server runnig on port : http://localhost:${PORT}`));

