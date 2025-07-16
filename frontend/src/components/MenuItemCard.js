import React, { useState } from 'react';
import { addItem, increaseItemQuantity, reduceItemQuantity } from '../stores/OrderSlice';
import { useDispatch, useSelector } from 'react-redux';

const MenuItemCard = ({menuItem}) => {
    // console.log(menuItem);
    const [isSelected,setIsSelected]=useState(false);
    const orderTotal=useSelector((store)=>store.order.orderTotal)
    const quantity=useSelector((store)=>store.order.quantityMap.get(menuItem[0]))
    const dispatch=useDispatch();
    const handleAdd=()=>{
        setIsSelected(true);
        dispatch(addItem(menuItem))

    }
    const handleReduce=()=>{
        dispatch(reduceItemQuantity(menuItem));
    }
    const handleIncrement=()=>{
        dispatch(increaseItemQuantity(menuItem))
    }
  return (
    <tr>
        <td>
            {menuItem[0]}
        </td>
        <td style={{textAlign:"right"}}>
            {menuItem[1]}
        </td>
        <td>
            {isSelected?<div><button className="menu-dec-btn" onClick={handleReduce}>-</button><button className='menu-add-btn'>{quantity}</button><button className="menu-inc-btn" onClick={handleIncrement}>+</button></div>:<button onClick={handleAdd} className='menu-add-btn'>Add</button>}
        </td>
    </tr>
  )
}

export default MenuItemCard