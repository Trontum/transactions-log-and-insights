import React from 'react'
import OrderCardItem from './OrderCardItem'
import { useDispatch } from 'react-redux'
import { addOrderToDashboard } from '../stores/DayReportSlice';
import { removeOrder, updateOrder } from '../stores/OrderSlice';
import NewTransaction from './NewTransaction';

const OrderCard = ({order}) => {
    const dispatch=useDispatch();
    const handleCompleteOrder=()=>{
        dispatch(addOrderToDashboard(order))
        // console.log(dashboardState)
        dispatch(removeOrder(order))
    }
    // const handleUpdateOrder=()=>{
    //     // <NewTransaction/>
    //     dispatch(updateOrder(order))
    // }
    const items=[...new Set(order.items.map(item=>JSON.stringify(item)))].map(item=>JSON.parse(item));
    // console.log("$$",items);
    
  return (
    <>
    <div style={{backgroundColor:"#a223f7", display:"inline-block", borderRadius:"6%", color:"white" , marginRight:"20px",marginBottom:"20px"}}>
        <div style={{margin:"20px", display:"inline-block"}}>
        <p style={{fontSize:"1em"}}>Order No    : {order.orderId}</p>
        <p style={{fontSize:"1em"}}>Total Items : {order.totalItems}</p>
        <p style={{fontSize:"1.5em"}}>Order Total : {order.orderTotal}</p>
        <table style={{marginBottom:"10px", borderStyle:"dashed", borderColor:"white", borderWidth:""
        }}>
            <tr colSpan="3" style={{textAlign:"center", fontWeight:"bold", padding:"10px"
            }}>
                <td colSpan="3">Order Items</td>
            </tr>
        <tbody>
            <tr style={{padding:"10px"}}>
                <td style={{textAlign:"center", padding:"10px"}}>Item Name</td>
                <td style={{textAlign:"center", padding:"10px"}}>Item Price</td>
                <td style={{textAlign:"center", padding:"10px"}}>Item Total</td>
            </tr>
        {items.map((item,index)=>{
            // console.log(item);
            return <OrderCardItem key={index} item={item} quantityMap={order.quantityMap}/>
        })}
        </tbody>
        </table>
        <button style={{borderRadius:"5%",margin:"5px", backgroundColor:"red", borderStyle:"none", color:"white", padding:"5px"}}onClick={()=>dispatch(removeOrder(order))} >Delete</button>
        {/* <button style={{borderRadius:"5%",margin:"5px",backgroundColor:"orange", borderStyle:"none", color:"white", padding:"5px"}} onClick={handleUpdateOrder} >Update</button> */}
        <button style={{borderRadius:"5%",margin:"5px", backgroundColor:"green", borderStyle:"none", color:"white", padding:"5px"}} onClick={handleCompleteOrder}>Complete Order</button>
        </div>
    </div></>
  )
}

export default OrderCard