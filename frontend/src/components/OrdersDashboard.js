import React from 'react'
import { useSelector } from 'react-redux'
import OrderCard from './OrderCard';

const OrdersDashboard = () => {
    const orders=useSelector((store)=>store.order.orders);
  return (
    <div>
        {orders.map((order,index)=>{
            return <OrderCard order={order} key={index}/>
})}
    </div>
  )
}

export default OrdersDashboard