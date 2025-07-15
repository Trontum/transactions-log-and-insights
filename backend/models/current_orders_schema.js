import mongoose, { Schema } from "mongoose";

const currentOrdersSchema=mongoose.Schema({
    orderTotal:{type:Number,default:0},
    items:{type:Array,default:[]},
    quantityMap:{type:Object},
    totalItems:{type:Number,default:0},
    orderId:{type:Number,default:0},
},{collection:"current_orders"})

const CurrentOrders=mongoose.model("CurrentOrders",currentOrdersSchema);
export default CurrentOrders;