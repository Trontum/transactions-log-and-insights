import mongoose from "mongoose";

const salesReportSchema=mongoose.Schema({
    Date:{type:String, default:""},
    TotalEarningsOfTheDay:{type:Number,default:0},
    TotalItemsSold:{type:Number,default:0},
    TotalTransactions:{type:Number,default:0},
    CashPayment:{type:Number,default:0},
    UpiPayment:{type:Number,default:0},
    TeaSalesAmount:{type:Number,default:0},
    TeaSalesCount:{type:Number,default:0},
    CoolersSalesAmount:{type:Number,default:0},
    CoolersSalesCount:{type:Number,default:0},
    "Milk ShakesSalesAmount":{type:Number,default:0},
    "Milk ShakesSalesCount":{type:Number,default:0},
    "Flavoured MilkSalesAmount":{type:Number,default:0},
    "Flavoured MilkSalesCount":{type:Number,default:0},
    SnacksSalesAmount:{type:Number,default:0},
    SnacksSalesCount:{type:Number,default:0},
    "Other BeveragesSalesAmount":{type:Number,default:0},
    "Other BeveragesSalesCount":{type:Number,default:0},
},{collection:"sales_report"})

const SalesReport=mongoose.model("SalesReport",salesReportSchema);
export default SalesReport;