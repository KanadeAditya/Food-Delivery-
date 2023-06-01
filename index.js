const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')

const {connection} = require("./connect.js")
const {APIRouter} = require('./controllers/api.routes.js')

const app = express();

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`<h1>Server is running fine </h1><h2>Port no. : ${process.env.PORT} </h2>`)
})

app.use('/api',APIRouter);

app.listen(process.env.PORT,async()=>{
    try {
        console.log("Server is running on "+process.env.PORT)
        await connection
        console.log("DB connected")
    } catch (error) {
        console.log({msg:error})
    }
})