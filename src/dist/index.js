import express from 'express';
import Product from './db/connection.js';
//* Importing dotenv for environment variables.
import * as dotenv from 'dotenv';
dotenv.config();
//* Setting the port
const PORT = process.env.PORT;
//* Configuring app variables
const app = express();
app.use(express.json());
//* middlewares
//* routes
app.get('/ping', (_req, res) => {
    console.log('Someone has made a ping here');
    res.send('pong!');
});
app.get('/addProduct', (_req, res) => {
    const product = new Product({
        name: 'Product 1',
        description: 'Description 1',
        prices: [
            {
                store: 'Store A',
                price: 12.99
            },
            {
                store: 'Store B',
                price: 11.49
            },
            {
                store: 'Store C',
                price: 13.29
            }
        ]
    });
    product.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
