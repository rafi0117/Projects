// mongodb://localhost:27017

import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://abdulrafi_04:Rafi0117@raficfi.zki6qm3.mongodb.net/hotelDB")
        console.log("Mongo DB is connected")
    } catch (error) {
        
    }
}
connectDB()