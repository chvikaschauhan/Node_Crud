import express ,{ request, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./postgres/routes/routes.js";



dotenv.config()

//Connection to the dataBase



var app = express()
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api',router)

app.get("/",(req, res) => {
    console.log("here it reached")
    res.status(200).send("hello2222")
})

var server = app.listen(8002,()=>{
    console.log("server running",server.address())
     
})

