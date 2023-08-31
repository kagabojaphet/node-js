import express, { Router } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes";

//import express framework and dotenv package used to access .env data
const app=express();
dotenv.config();
app.use(bodyParser.json())
app.use("/api/v1",router)

//call and decralering a variable of port and database to be used came from .env
const port=process.env.PORT
const database=process.env.DATABASE

//configure a port
app.listen(port,()=>{
    console.log(`port running on....${port}`)
});

//configure a database
mongoose.connect(database).then(()=>{
    console.log(`database successfully connected `)
})
.catch((err)=>{
    console.log(`database error ${err}`)
})
export default app;
