import React from 'react'

const DashboardRow = ({metric}) => {

  return (
    <tr style={{backgroundColor:"rgb(230, 215, 247)"}}>
        <td style={{padding:"20px", color:"black", fontSize:"1.5rem", width:"70%"}}>
            {metric[0]}
        </td>
        <td style={{padding:"20px", color:"black", fontSize:"1.5rem"}}>
            {metric[1]}
        </td>
    </tr>
  )
}

export default DashboardRow