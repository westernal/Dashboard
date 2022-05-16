import Header from "../../components/Layout/Header";
import NavBar from "../../components/Layout/NavBar";
import DataTable from "react-data-table-component";

const Users = () => {
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
    {
      name: "کد کاربر",
      selector: (row) => row.year,
    },
    {
      name: "کد کاربر",
      selector: (row) => row.year,
      hide: "md",
    },
    {
      name: "کد کاربر",
      selector: (row) => row.year,
      hide: "md",
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
    <div className="users-page">
      <div className="grid-container">
        <NavBar />
        <div className="page-content">
          <Header title={"کاربر ها"} />
          <div className=" flex">
            <div className="data-table">
              {" "}
              <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
                responsive
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
