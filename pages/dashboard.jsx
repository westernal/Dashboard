import Header from "../components/Layout/Header";
import NavBar from "../components/Layout/NavBar";

const Dashboard = () => {
  return (
    <div className="dash-page">
      <div className="grid-container">
        <NavBar />
        <div className="page-content">
          <Header title="پیشخوان" />
          <div className="website-details">
            <div className="login-form">
              <div className="flex">
                <p>سفارش ها</p>
              </div>
            </div>
            <div className="login-form">
              <div className="flex">
                <p>کاربر ها</p>
              </div>
            </div>
            <div className="login-form">
              <div className="flex">
                <p>نمایندگی ها</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
