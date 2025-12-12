// Server entry 

const app = require ('./app.mjs');
const config = require ('./config/config.mjs');

app.listen(config.port, ()=> {
    console.log(`Server running on port ${config.port}`)
}); 