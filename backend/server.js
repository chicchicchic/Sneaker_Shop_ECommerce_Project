const express = require('express')
const data = require('./data')

// import express from 'express';
// import data from './data';

const app = express();

// app.get('/',(req,res)=>{
//     res.json('abc')
// })

app.get("/api/products", (req, res) => {

    res.send(data.products);
});

app.listen(5000, () => { console.log("Server started at http://localhost:5000") })