import React, { useState } from 'react'
import MenuSegment from './MenuSegment';
import AddSegment from './AddSegment';

const UpdateMenu = ({sendUpdateComplete}) => {
    const handleUpdate=()=>{
        sendUpdateComplete(false);
    }
    const [isAddingSegment,setIsAddingSegment]=useState(false);
    const [menu,setMenu]=useState([]);
    const handleAddSegment=()=>{
        setIsAddingSegment(true);

    }
  return (
    <div>
        {isAddingSegment && <AddSegment/>}
        {isAddingSegment && menu.map((segment,index)=>{
            return <MenuSegment key={index} segment={segment}/>
        })}
        <button className='menu-btn' onClick={handleAddSegment}>Add Segment</button>
        <button className='menu-btn' onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default UpdateMenu