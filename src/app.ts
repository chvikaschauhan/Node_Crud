import express from "express";
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

app.get("/:id",(req, res) => {
    console.log("here it reached")
    console.log("here id ",req.params.id)
    res.status(200).send("hello2222")
})

//const host = '10.0.2.2' ;

var server = app.listen(8002, ()=>{
    console.log("server running",server.address())
     
})

