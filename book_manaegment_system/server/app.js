import express from "express";
import config from "config";
import "./dbConnect.js";

import UserRoutes from "./controllers/user/index.js";
import rootRoutes from "./controllers/root/index.js";




const app = express();
const port = config.get("PORT");

//JSON Body Parser
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is Book Management System API Backend")
});

app.use("/api/user", UserRoutes);
app.use("/api", rootRoutes)

app.listen(port, () => {
    console.log("Server Started at Port : ", port);
})