require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.use((req, res, next) => {
    // Logs every request
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next(); // Pass to next handler (required!)
});

app.get('/', (req, res) => {
    res.send('My Week 2 API!');
});

app.post('/user', (req, res) => {
    const {name, email} = req.body;
    if (!name || !email){
        return res.status(400).json({error: 'Missing Data'});
    }
    res.send(`Hello, ${req.body.name}!`);
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ${id} profile.`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});