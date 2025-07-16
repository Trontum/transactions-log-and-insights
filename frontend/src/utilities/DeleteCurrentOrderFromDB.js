import axios from "axios";

const deleteCurrentOrderFromDB = (orderId) => {
    axios.post("http://localhost:5000/db/delete_current_order", { orderId })
    .then((response) => {
        console.log(response.status);
    }).catch((err) => {
        console.log(err);
    });
}

export default deleteCurrentOrderFromDB;