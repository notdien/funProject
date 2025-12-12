// NTS: This file loads your environment variables from a .env file and 
// provides type checking

import dotenv = require('dotenv');

dotenv.config();

interface Config {
    port: number;
    nodeEnv: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
