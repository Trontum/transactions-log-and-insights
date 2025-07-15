import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import updateCurrentOrderToDB from "../utilities/UpdateCurrentOrderToDB";
import deleteCurrentOrderFromDB from "../utilities/DeleteCurrentOrderFromDB";
import currentOrders from "../utilities/GetCurrentOrdersFromDB";
enableMapSet();

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: currentOrders,
    orderId:0,
    orderTotal:0,
    items:[],
    totalItems:0,
    quantityMap: new Map(),
  } ,
  reducers: {
    addItem: (state, action) => {
        let item = state.items.find((item) => action.payload[0] === item[0]);
        if(item===undefined){
            state.items.push(action.payload);
            state.orderTotal+=Number(action.payload[1]);
            state.totalItems+=1
            state.quantityMap.set(action.payload[0], 1);
        }
        else{
            state.orderTotal+=Number(action.payload[1]);
            state.totalItems+=1
            state.quantityMap.set(
                action.payload[0],
                state.quantityMap.get(action.payload[0]) + 1
              );
        }
    },
    reduceItemQuantity:(state, action)=>{
        const item=state.items.find((item)=>action.payload[0]===item[0]);
        // console.log(action.payload);
        if (item !== undefined) {
            if(state.quantityMap.get(action.payload[0])===1){
                state.items = state.items.filter(
                    (curItem) => curItem[0] !== action.payload[0]
                  );
            }
            state.orderTotal -= Number(action.payload[1]);
            state.totalItems-=1
            state.quantityMap.set(
                action.payload[0],
                state.quantityMap.get(action.payload[0]) - 1
              );
          }
    },
    increaseItemQuantity:(state, action)=>{
        const item=state.items.find((item)=>action.payload[0]===item[0]);
        // console.log(action.payload);
        if (item !== undefined) {
            state.orderTotal += Number(action.payload[1]);
            state.totalItems+=1;
            state.quantityMap.set(
                action.payload[0],
                state.quantityMap.get(action.payload[0]) + 1
              );
          }
        else{
            state.items.push(action.payload);
            state.orderTotal+=Number(action.payload[1]);
            state.quantityMap.set(action.payload[0], 1);
            state.totalItems+=1
        }
    },
    addOrder:(state,action)=>{
        const order={
            orderTotal:state.orderTotal,
            items:state.items,
            quantityMap:state.quantityMap,
            totalItems:state.totalItems,
            orderId:action.payload.orderId
        }
        state.orders.push(order);
        order.quantityMap=Object.fromEntries(order.quantityMap);
        updateCurrentOrderToDB(order);
        state.items=[]
        state.orderTotal=0
        state.totalItems=0
        // state.orderId+=1
        state.quantityMap=new Map();
    },
    // updateOrder:(state,action)=>{
    //     // console.log("###",action.payload);
    //     const order=state.orders.find((order)=>order.orderId===action.payload.orderId);
    //     // console.log(order);
    //     if(order){
    //         order.items=action.payload.items;
    //         order.orderTotal=action.payload.orderTotal;
    //         order.quantityMap=Object.fromEntries(action.payload.quantityMap);
    //         order.totalItems=action.payload.totalItems;
    //         updateCurrentOrderToDB(order);
    //     }
    // },
    removeOrder:(state,action)=>{
        // console.log(state.orders)
        const newOrders=state.orders.filter((order)=>order.orderId!==action.payload.orderId)
        state.orders=newOrders;
        deleteCurrentOrderFromDB(action.payload.orderId);
        // console.log(state.orders);
    },
    clearCart: (state, action) => {
      return { items: [],totalPrice:0 };
    },
  },
});

export default orderSlice.reducer;

export const { addItem, reduceItemQuantity, increaseItemQuantity, addOrder, removeOrder, clearCart } = orderSlice.actions;

// action : {
// payload : info about the product details
// }