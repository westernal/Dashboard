import PolarChart from "../../components/Charts/Polar";
import Header from "../../components/Layout/Header";
import NavBar from "../../components/Layout/NavBar";

const Orders = () => {
  const columns = [
    {
      name: "نام",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "کد کاربر",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];
  return (
    <div className="orders-page">
      <div className="grid-container">
        <NavBar />
        <div className="page-content">
          <Header title={"سفارش ها"} />
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
