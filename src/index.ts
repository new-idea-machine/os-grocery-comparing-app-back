import express from 'express';
import Product  from './db/connection.js';

//* Importing dotenv for environment variables.
import * as dotenv from 'dotenv';
dotenv.config();


//* Setting the port
const PORT = process.env.PORT;


//* Initializing express application 
const app = express();


//* middlewares
app.use(express.json());


//* End point testing
app.get('/ping', (_req, res) => {
    console.log('Someone has made a ping here')
    res.send('pong!')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})