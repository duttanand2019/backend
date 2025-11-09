// require("dotenv").config()  // legacy way to import env variables

// imporved way to import env variables

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});


connectDB();


// import mongoose from "mongoose";
// import{db_name} from "./constants.js";


/*

// 1st approach

// initializing app file into this file using express
import express from "express";
const app = express();

( async () => {   // IIFE - Immediately Invoked Function Expression , before this we use [;]  this to avoid ASI issues
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        app.on("error",(error) => {
            console.error("ERROR : ", error);
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("ERROR :", error)
        throw err      
    }
})()

*/