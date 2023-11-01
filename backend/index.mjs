import { exampleUsers } from './user.mjs';
import { exampleTasks } from './tasks.mjs';
import express from 'express';

const app = express()

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.get("/users", (req, res) => {
    res.json({"users": exampleUsers})
})

app.get("/tasks", (req, res) => {
    res.json({"tasks": exampleTasks})
})

app.use(express.json())
app.post('/users/adduser', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    exampleUsers.unshift(newUser);
    res.json({ 'message': 'User added successfully', 'user': newUser });
});

app.listen(5000,  () => {
    console.log("Started application on port %d", 5000)
});