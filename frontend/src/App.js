import MetricsDashboard from "./components/MetricsDashboard";
import Navbar from "./components/Navbar";
import NewTransaction from "./components/NewTransaction";
import OrdersDashboard from "./components/OrdersDashboard";
function App() {
  return (
    <>
    <Navbar/>
    <div style={{width:"95%", margin :"auto",marginTop:"50px", marginBottom:"50px"}}>
    <MetricsDashboard/>
    <OrdersDashboard/>
    <NewTransaction/>
    </div>
    </>
  );
}

export default App;
