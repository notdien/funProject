import express = require('express');
const app = express();

app.use(express.json());

// use routes here
app.get('/ping', (req, res) => {
    res.status(200).send('Server is running!');
})

// use global error handler here

export = app;