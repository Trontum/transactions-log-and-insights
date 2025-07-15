import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dbRouter from "./routes/db_data.mjs";
import menuRouter from "./routes/current_menu.mjs";

dotenv.config();

const app=express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors());


app.use("/db",dbRouter);
app.use("/db/menu",menuRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server is running...");
});

