// This is where your CRUD will go - create these later
import Request = require('express');
import { items, Item } from '../models/item';


// ping test
app.get('/ping', (req, res) => {
    res.status(200).send('Server is running!');
})