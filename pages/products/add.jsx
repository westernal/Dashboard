import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/Extras/Loader";
import Header from "../../components/Layout/Header";
import NavBar from "../../components/Layout/NavBar";

const AddProducts = () => {
  const [loader, SetLoader] = useState(false);

  function addProduct(details, title, image) {
    SetLoader(true);
    toast.success("Product added successfuly");
  }

  function checkInputs(e) {
    e.preventDefault();

    const title = document.getElementById("title");
    const details = document.getElementById("details");
    const image = document.getElementById("image");

    if (details.value == "") {
      toast.error("Please enter product's details.");
    }

    if (title.value == "") {
      toast.error("Please enter product's title.");
    } else addProduct(details.value, title.value, image.value);
  }
  return (
    <div className="products-page">
      <div className="grid-container">
        <NavBar />
        <div className="page-content">
          <Header title={" Products"} />
          {loader && <Loader size={20} />}
          <div className="flex">
            <div className="login-form mt-100">
              <div className="inputs">
                <div className="add-image">
                  <label htmlFor="image">Image:</label>
                  <input type="file" id="image" name="image" accept="image/*" />
                </div>
                <input type="text" placeholder="Title" id="title" />

                <input type="text" placeholder="Details" id="details" />
              </div>
              <div className="flex">
                <button id="prime-btn" onClick={checkInputs}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
