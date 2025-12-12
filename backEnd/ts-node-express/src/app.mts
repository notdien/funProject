import express = require('express');
// import routes here
// import error handling

const app = express();

app.use(express.json());

// use routes here

// use global error handler here

export default app;