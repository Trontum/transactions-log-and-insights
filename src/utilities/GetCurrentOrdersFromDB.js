import axios from "axios";


let currentOrders= [];
const getCurrentOrdersFromDB = async () => {
    try {
        const response = await axios.get("http://localhost:5000/db/get_current_orders");
        if (response.status === 200 && response.data !== null) {
            console.log("Current Orders fetched successfully:", response.data);
            return response.data;
        } else {
            return currentOrders;
        }
    } catch (err) {
        console.error("Error fetching current orders from the server:", err);
        return currentOrders;
    }
}

currentOrders=await getCurrentOrdersFromDB();
export default currentOrders;