import React from 'react'


const OrderCardItem = ({item, quantityMap}) => {
  console.log("###",quantityMap)
  quantityMap = new Map(Object.entries(quantityMap));
  return (
    <>
        <tr>
            <td style={{padding:"5px"}}>{item[0]+" x "+quantityMap.get(item[0])}</td>
            <td style={{textAlign:"right", padding:"5px"}}>{item[1]}</td>
            <td style={{textAlign:"right", padding:"5px"}}>{Number(quantityMap.get(item[0]))*Number(item[1])}</td>
        </tr>
    </>
  )
}

export default OrderCardItem