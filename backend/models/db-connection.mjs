import { MongoClient } from "mongodb";
import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();
let main=async()=>{
  try {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("connected to DB Successfully !!!");

  } catch(e) {
    console.log("error while connection ----------------");
    console.error(e);
  }
}
// let db = conn.db("transactions_data");
export default main;