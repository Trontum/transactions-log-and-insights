import React, { useState } from 'react'

const AddSegment = () => {
    const [segmentData,setSegmentData]=useState({})
    const [segmentName,setSegmentName]=useState("")
    return (
        <div>
            <input type='text' placeholder='Enter Segment name' value={segmentName}/>
            <button >Add Segment Item</button>
        </div>
    )
}

export default AddSegment