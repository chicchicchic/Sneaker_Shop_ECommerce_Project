// const express = require('express')
// const data = require('./data')

import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true
}).catch(error => console.log(error.reason));

const app = express();

// Đại chỉ viết khúc này để test nó có chạy không lỗi khi trình duyệt trả về localhost:5000 không
// app.get('/',(req,res)=>{
//     res.json('abc')
// })

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

// chỉ có pot 5000 mới run dc, sửa thành pot bất kỳ ko đúng là ko run dc
app.listen(5000, () => { console.log("Server started at http://localhost:5000") })