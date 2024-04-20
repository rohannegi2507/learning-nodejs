import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import http from 'http'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import mongoose from 'mongoose'
import router from './router'

const app = express()

app.use(cors({credentials:true}))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())


const server = http.createServer(app)


server.listen('8080',()=>{
    console.log("Successfuly running")
})

const MONGO_URL = "mongodb+srv://rohannegidev:4MWsODYh1prJPEAY@cluster0.6m6ljxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error',(error: Error)=> console.log("Mongoose error", error))


app.use('/', router())
