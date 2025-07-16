import axios from "axios";

const updateCurrentOrderToDB = (order) => {
    // console.log("*******", order);
    axios.post("http://localhost:5000/db/update_current_orders", order)
    .then((response)=>{
        alert("---Current Order with Order ID: "+order.orderId+" saved to DB successfully.");
        console.log(response.status)
    }).catch((err)=>{
        console.log(err);
    })
};

export default updateCurrentOrderToDB;