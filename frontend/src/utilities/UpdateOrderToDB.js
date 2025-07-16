import axios from "axios";

const addOrderToDB=(dashboardState)=>{
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-IN");
    const newDashboardState={...dashboardState, "Date":formattedDate};
    // console.log(newDashboardState)
    axios.post("http://localhost:5000/db/add_order_to_db",newDashboardState)
    .then((response)=>{
        window.location.reload(true);
        console.log(response.status)
    }).catch((err)=>{
        console.log(err);
    })
}

export default addOrderToDB;