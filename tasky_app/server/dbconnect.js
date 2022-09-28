// mongodb://localhost:27017

import mongoose from "mongoose";

async function connect2DB(){
    try {
        await mongoose.connect("mongodb+srv://abdulrafi_04:Rafi0117@raficfi.zki6qm3.mongodb.net/tasky")
        console.log("Mongo DB is connected")
    } catch (error) {
        
    }
}
connect2DB()