import Loader from "../components/Extras/Loader";
import Header from "../components/Layout/Header";
import NavBar from "../components/Layout/NavBar";
import { useState } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const [loader, SetLoader] = useState(false);

  function showPassword(e) {
    e.preventDefault();

    var password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  function changePassword(password) {}

  function checkInputs(e) {
    e.preventDefault();
    SetLoader(true);

    const password = document.getElementById("password");
    const secondPassword = document.getElementById("rpassword");

    if (password.value != secondPassword.value) {
      toast.error("Repeat password is not correct.");
    }

    if (password.value < 6) {
      toast.error("Password should be more than 6 characters.");
    } else changePassword(password.value);
  }

  return (
    <div className="profile-page">
      <div className="grid-container">
        <NavBar />
        <div className="page-content">
          <Header title={"Profile"} />
          {loader && <Loader size={20} />}
          <div className="flex">
            <div className="login-form mt-100">
              <div className="inputs">
                <input
                  type="text"
                  placeholder="ali_navidi24@yahoo.com"
                  id="email"
                  readOnly
                />
                <div className="pw-input">
                  <input type="password" placeholder="Password" id="password" />
                  <a href="#" onClick={showPassword}>
                    <img
                      src="/Images/eye-svgrepo-com.svg"
                      alt="Show Password"
                    />
                  </a>
                </div>
                <div className="pw-input">
                  <input
                    type="password"
                    placeholder="Repeat password"
                    id="rpassword"
                  />
                  <a href="#" onClick={showPassword}>
                    <img
                      src="/Images/eye-svgrepo-com.svg"
                      alt="Show Password"
                    />
                  </a>
                </div>
              </div>
              <div className="flex">
                <button id="prime-btn" onClick={checkInputs}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
