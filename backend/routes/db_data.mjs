import express from "express";
import main from "../models/db-connection.mjs";
import SalesReport from "../models/sales_report_schema.js";
import CurrentOrders from "../models/current_orders_schema.js";

const router=express.Router();

router.get("/db_data",async (req,res)=>{
    main();
    res.send("successful");
})

router.get("/get_current_state",async (req,res)=>{
    main();
    const date=new Date().toLocaleDateString("en-IN")
    const salesReport=await SalesReport.findOne({Date:date},{_id:0,__v:0});
    // console.log(date)
    // console.log(salesReport);
    if (salesReport!==null) {
        res.status(200).json(salesReport);
    } else {
        res.status(200).json(null);
    }
})

router.get("/get_current_orders",async (req,res)=>{
    main();
    const currentOrders=await CurrentOrders.find({}, {_id:0, __v:0});
    res.status(200).json(currentOrders);
});

router.post("/update_current_orders",async (req,res)=>{
    main();
    const data=req.body;
    const existingOrder=await CurrentOrders.findOne({orderId:data.orderId});
    if (existingOrder!==null){
        console.log(req.body);
        CurrentOrders.replaceOne({orderId:data.orderId},data)
        .then(console.log("Current Order with Order ID: "+data.orderId+" updated to DB successfully.")) 
        .catch((err)=>{
            console.log(err);
        })
        return res.status(200);
    }
    else{
        const currentOrder=new CurrentOrders(data);
        console.log(req.body);
        currentOrder.save()
        .then(console.log("Current Order with Order ID: "+data.orderId+" saved to DB successfully."))
            .catch((err)=>{
            console.log(err);
            })
            res.status(200);
    }

});

router.post("/add_order_to_db",async (req,res)=>{
    main();
    const data=req.body;
    // console.log(salesReport);
    const existingData= await SalesReport.findOne({Date:data.Date});
    if (existingData===null){
        const salesReport=new SalesReport(data);
        salesReport.save()
        .then(console.log("Order saved to DB successfully."))
        .catch((err)=>{
        console.log(err);
        })
        res.status(200);
    }
    else{
        SalesReport.replaceOne({Date:data.Date},data)
        .then(console.log("Order Updated to DB successfully."))
        .catch((err)=>{
            console.log(err);
        })
        res.status(200);
    }
})

router.post("/delete_current_order",async (req,res)=>{
    main();
    const data=req.body;
    // console.log(data);
    CurrentOrders.deleteOne({orderId:data.orderId})
    .then(console.log("Current Order with Order ID: "+data.orderId+" deleted from DB successfully."))
    .catch((err)=>{
        console.log(err);
    })
    res.status(200);
})

export default router;