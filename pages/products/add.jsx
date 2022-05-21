import { toast } from "react-toastify";
import Header from "../../components/Layout/Header";
import NavBar from "../../components/Layout/NavBar";

const AddProducts = () => {
  function addProduct(details, title, image) {
    toast.success("محصول با موفقیت ثبت شد.");
  }

  function checkInputs(e) {
    e.preventDefault();

    const title = document.getElementById("title");
    const details = document.getElementById("details");
    const image = document.getElementById("image");

    if (details.value == "") {
      toast.error("نام محصول وارد نشد");
    }

    if (title.value == "") {
      toast.error("توضیح محصول وارد نشد");
    } else addProduct(details.value, title.value, image.value);
  }
  return (
    <div className="products-page">
      <div className="grid-container">
        <NavBar />
        <div className="page-content">
          <Header title={"محصول ها"} />
          <div className="flex">
            <div className="login-form mt-100">
              <div className="inputs">
                <div className="add-image">
                  <label htmlFor="image">تصویر محصول:</label>
                  <input type="file" id="image" name="image" accept="image/*" />
                </div>
                <input type="text" placeholder="نام محصول" id="title" />

                <input type="text" placeholder="توضیح محصول" id="details" />
              </div>
              <div className="flex">
                <button id="prime-btn" onClick={checkInputs}>
                  ثبت
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
