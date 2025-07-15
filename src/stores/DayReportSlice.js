import { createSlice } from "@reduxjs/toolkit";
import addOrderToDB from "../utilities/UpdateOrderToDB";
import dashboardState from "../utilities/GetCurrentStateFromDB";


const dayReportSlice = createSlice({
  name: "dayReport",
  initialState: dashboardState,
  reducers: {
    addOrderToDashboard:(state,action)=>{
      const quantityMap=new Map(Object.entries(action.payload.quantityMap));
      state.SalesDashboard.TotalEarningsOfTheDay+=action.payload.orderTotal
      state.SalesDashboard.TotalItemsSold+=action.payload.totalItems
      state.SalesDashboard.TotalTransactions+=1
      action.payload.items.map((item)=>{
        console.log(item);
        state.SalesDashboard[item[2]+"SalesAmount"]+=quantityMap.get(item[0])*item[1];
        state.SalesDashboard[item[2]+"SalesCount"]+=quantityMap.get(item[0]);
      })
      addOrderToDB(state.SalesDashboard);
    },
  },
});

export default dayReportSlice.reducer;

export const { addOrderToDashboard } = dayReportSlice.actions;

// action : {
// payload : info about the product details
// }