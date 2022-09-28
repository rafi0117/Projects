import mongoose from "mongoose";
async function connectDB (){
    try {
        await mongoose.connect("mongodb+srv://abdulrafi_04:Rafi0117@raficfi.zki6qm3.mongodb.net/ER")
   console.log("mongo DB is connected")
    } catch (error) {
        console.log(error)
    }
}
connectDB();