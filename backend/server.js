import express from 'express';
import data from './data';
// import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
// import cors from 'cors';

// const express = require('express')
// const data = require('./data')
// const dotenv = require('dotenv')
// const config = require('./config')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const userRoute = require('./routes/userRoute')
// const cors = require('cors');

// dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true
}).catch(error => console.log(error.reason));

const app = express();

// Đại chỉ viết khúc này để test nó có chạy không lỗi khi trình duyệt trả về localhost:5000 không
// app.get('/',(req,res)=>{
//     res.json('abc')
// })

// Set cors in NodeJS (Nếu lỗi Cors)
// app.use(cors());

// Set cors in NodeJS (Nếu lỗi Cors)
// app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });
    
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found." })
});
app.get("/api/products", (req, res) => {

    res.send(data.products);
});

app.listen(5000, () => { console.log("Server started at http://localhost:5000") });