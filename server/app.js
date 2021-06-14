const express=require('express')
const app=express()
const jwt=require('jsonwebtoken');
const dotenv=require("dotenv")
dotenv.config()
const router=require('./router')
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cors=require('cors')


const optionsConnection = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONNECT, optionsConnection)
    .then(() => { console.log("connected to db") })
    .catch((err) => { console.log(`error connect ${err}`) })

app.use(cors(),router)
app.listen(process.env.PORT, () => console.log(`listening to port ${process.env.PORT}`))


