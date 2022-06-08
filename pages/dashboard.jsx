import Link from "next/link";
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
            <Link href={"/orders"}>
              <a>
                <div className="login-form">
                  <p>سفارش ها</p>
                  <p>10</p>
                </div>
              </a>
            </Link>
            <Link href={"/users"}>
              <a>
                <div className="login-form">
                  <p>کاربر ها</p>
                  <p>9</p>
                </div>
              </a>
            </Link>
            <Link href={"/branches"}>
              <a>
                <div className="login-form">
                  <p>نمایندگی ها</p>
                  <p>12</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
