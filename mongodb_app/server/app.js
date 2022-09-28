import express from "express";

const app = express();
import "./dbconnect.js";
import hotelModel from "./hotel.js";

const port =5000;

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("SERVER is UP")
})

app.post("/booking",async(req,res)=>{
    try {
        // console.log(req.body)
        let booking_data = new hotelModel(req.body);
        await booking_data.save()
        console.log(booking_data)
        res.status(200).json({"success":"Route is working"})
    } catch (error) {
        console.error(error)
        res.status(500).json({"error": "internal server error"})
        
    }
})
app.listen(port, (req,res)=>{
    console.log("server Started at port",port);
})