import express, { Router } from "express";
import Product from "../db/models/products";

const router = express.Router();
    router.get('/addProduct', (req,res) => {
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
        })
        product.save().then((result: any) => {
            res.send(result);
        }).catch((err: any) => {
            console.log(err);
        });
    });
