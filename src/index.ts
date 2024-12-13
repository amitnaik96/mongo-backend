import express from 'express';
import { User } from "./db"

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message : "server is up!"
    })
});

app.post('/user', async (req, res) => {
    try {
        const {name, age, email} = req.body;
        await User.create({name, age, email});
        res.json({
            message : "User added successfully"
        });
    } catch (err) {
        res.status(500).json({
            message : "invalid/missing inputs"
        })
    }
});

app.get('/users', async (req, res) => {
    try {
        const response = await User.find({});
        res.json({
            users : response
        });
    } catch (err) {
        res.status(500).json({
            message : "could not fetch users!"
        });
    }
});

app.listen(3000);