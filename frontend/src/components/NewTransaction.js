import React, { useState } from 'react'
import axios from 'axios';
import MenuSegmentCard from './MenuSegmentCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addOrder, updateOrder } from '../stores/OrderSlice';

const NewTransaction = () => {
    const [menu,setMenu]=useState([]);
    const [isCreatingOrder,setIsCreatingOrder]=useState(false);
    const [isUpdatingOrder,setIsUpdatingOrder]=useState(false);
    const dispatch=useDispatch();
    const totalOrdersCompleted=useSelector((store)=>store.dayReport.SalesDashboard.TotalTransactions);
    const ordersInOrdersDashboard=useSelector((store)=>store.order.orders.length);
    const handleNewOrder=async()=>{
        setIsCreatingOrder(true);
        try{
            const response=await axios.get("http://localhost:5000/db/menu/get_current_menu");
            // console.log(Object.entries(response.data[0]));
            setMenu(Object.entries(response.data[0]));
        }
        catch(err){
            console.log(err);
        }
    }
    const handleUpdateOrder=()=>{
        setIsUpdatingOrder(true);
        handleNewOrder();


    }
    const handleUpdateSubmit=()=>{
        const orderId=Number(document.querySelector("input").value);
        if (isNaN(orderId) || orderId<=0){
            alert("Please enter a valid Order ID.");
            return;
        }
        const order={
            orderId:orderId,
        }
        dispatch(updateOrder(order));
        document.querySelector("input").value="";
        setIsUpdatingOrder(false);
        setIsCreatingOrder(false);
    }
    const handleCreateOrder=()=>{
        setIsCreatingOrder(false);

        dispatch(addOrder({orderId:totalOrdersCompleted+ordersInOrdersDashboard+1}));

    }
  return (
    <div>
        {isCreatingOrder && <><table style={{width:"50%",margin:"auto", marginBottom:"50px"}}>
            <thead>
                <th colSpan="2" style={{fontSize:"3rem",textAlign:"center",colSpan:"2"}}>Menu</th>
                </thead>
            <tbody>
        {menu.map((menuSegment,index)=>{
            if ( menuSegment[0]!=="_id" ) return <MenuSegmentCard key={index} menuSegment={menuSegment}/>
        })}
        </tbody>
            </table>
            { !isUpdatingOrder && <button onClick={handleCreateOrder} className='menu-btn'>Create Order</button>}</>}
        
        { !isCreatingOrder && <button className='menu-btn' onClick={handleNewOrder}> + New Order</button>}
        {isUpdatingOrder && <>
        <input style={{borderRadius:"5%", margin:"10px", height:"40px", width:"200px", borderStyle:"groove", padding:"10px"}} type='text' placeholder='Enter the OrderId to be updated.'/>
        <button className='menu-btn' onClick={handleUpdateSubmit}>update</button>
        </>}
        {ordersInOrdersDashboard>0 && !isCreatingOrder && !isUpdatingOrder &&
        <button className='menu-btn' onClick={handleUpdateOrder}>Update Order</button>}
    </div>
  )
}

export default NewTransaction