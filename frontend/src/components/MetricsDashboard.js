import React from 'react'
import { useSelector } from 'react-redux'
import DashboardRow from './DashboardRow'


const MetricsDashboard = () => {
    const dashboardState=Object.entries(useSelector((store)=>store.dayReport.SalesDashboard))
  return (
    <div style={{backgroundColor:"#a223f7", borderRadius:"5%", marginBottom:"20px"}}><h1 style={{padding:"5px", color:"white", textAlign:"center", paddingTop:"50px", paddingBottom:"0px"}}>Dashboard</h1>
        <table style={{width:"100%", padding:"10%", borderSpacing:"5px", paddingTop:"5%" }}>
          <tbody>
            {dashboardState.map((metric,index)=>{
                return <DashboardRow key={index} metric={metric} />
            })}
            </tbody>
        </table>
    </div>
  )
}

export default MetricsDashboard