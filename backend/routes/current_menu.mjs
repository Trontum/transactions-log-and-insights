import { MongoClient } from "mongodb";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const router=express.Router();

router.get("/get_current_menu",async(req,res)=>{
    try{
        const client=new MongoClient(process.env.DB_CONNECTION_STRING);
        let conn = await client.connect();
        let db=conn.db("transactions_data");
        let collection = db.collection("menu");
        let menu= await collection.find({}).toArray();
        console.log("MongoDB for Menu Connected Successfully...");
        res.send(menu);
    }
    catch(err){
        console.log(err);
    }
})

export default router;