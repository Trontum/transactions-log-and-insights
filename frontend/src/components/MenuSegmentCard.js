import React from 'react'
import MenuItemCard from './MenuItemCard'

const MenuSegmentCard = ({menuSegment}) => {
    // console.log(menuItem);
  return (
    <>
        <tr>
            <td colSpan="2" style={{fontSize:"2rem",textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>
            {menuSegment[0]}
            </td>
        </tr>
        <tr >
            <td style={{textAlign:"center", fontWeight:"bold"}}>Item Name</td>
            <td style={{textAlign:"center", fontWeight:"bold"}}>Item Price</td>
        </tr>
                {Object.entries(menuSegment[1]).map((menuItem,index)=>{
                    menuItem.push(menuSegment[0])
                    return <MenuItemCard key={index} menuItem={menuItem} />
                })}
    </>
  )
}

export default MenuSegmentCard