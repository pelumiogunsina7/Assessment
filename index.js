import express from "express"
import dotenv from "dotenv"
dotenv.config()
import fs from "fs"
import mongoose from "mongoose"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
import buyReqRoute from "./routes/buyRequest.js"
//const Server = http.createServer()
mongoose.connect(process.env.MONGO)

mongoose.set('strictQuery', false)
mongoose.connection.on("disconnected", () =>{
    console.log("MongoDb disconnected")
})

mongoose.connection.on("connected", () =>{
    console.log("MongoDb connected")
})

// middleware

app.use("/routes/buyrequest", buyReqRoute)






const port = process.env.port || 9500

app.listen(port, () =>{
    console.log("Server running on Port ", port)
})