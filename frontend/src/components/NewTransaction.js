import React, { useState } from 'react'
import axios from 'axios';
import MenuSegmentCard from './MenuSegmentCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addOrder } from '../stores/OrderSlice';

const NewTransaction = () => {
    const [menu,setMenu]=useState([]);
    const [isCreatingOrder,setIsCreatingOrder]=useState(false);
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
            <button onClick={handleCreateOrder} className='menu-btn'>Create Order</button></>}
        
        <button className='menu-btn' onClick={handleNewOrder}> + New Order</button>
    </div>
  )
}

export default NewTransaction