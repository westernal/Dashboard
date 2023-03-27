import Header from "../../components/Layout/Header";
import NavBar from "../../components/Layout/NavBar";
import DataTable from "react-data-table-component";
import Link from "next/link";

const Products = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "ID",
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
    <div className="products-page">
      <div className="grid-container">
        <NavBar />
        <div className="page-content">
          <Header title={"Products"} />
          <div className=" flex">
            <div className="data-table mt-100">
              <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
                responsive
              />
            </div>
          </div>
          <div className="flex">
            <Link href={"/products/add"}>
              <a>
                <button id="add-btn">Add product</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
