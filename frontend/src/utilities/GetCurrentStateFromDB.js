import axios from 'axios';
import initialState from '../stores/DayReportSliceInitialStateJson';

let dashboardState = initialState;
const getCurrentStateFromDB = async() => {
    try{
        const response = await axios.get("http://localhost:5000/db/get_current_state");
        // return response;
        if (response.status === 200 && response.data!== null) {
            dashboardState.SalesDashboard=response.data;
            return dashboardState;
        } else {
            return dashboardState;
        }
    }
    catch(err){
        console.error("Error fetching data from the server:", err);
    }
}

dashboardState=await getCurrentStateFromDB();
// getCurrentStateFromDB().then(() => {console.log(dashboardState)}).catch((err) => {console.log("illa")})
export default dashboardState;