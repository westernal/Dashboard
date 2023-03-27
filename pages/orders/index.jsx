import PolarChart from "../../components/Charts/Polar";
import Header from "../../components/Layout/Header";
import NavBar from "../../components/Layout/NavBar";

const Orders = () => {
  return (
    <div className="orders-page">
      <div className="grid-container">
        <NavBar />
        <div className="page-content">
          <Header title={"Orders"} />
          <div className=" flex">
            <div className=" mt-100">
              <PolarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
