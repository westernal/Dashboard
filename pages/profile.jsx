import Header from "../components/Layout/Header";
import NavBar from "../components/Layout/NavBar";

const Profile = () => {
  function showPassword(e) {
    e.preventDefault();

    var password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  function changePassword() {}

  return (
    <div className="profile-page">
      <div className="grid-container">
        <NavBar />
        <div className="page-content">
          <Header title={"مشخصات"} />
          <div className="flex">
            <div className="login-form">
              <div className="inputs">
                <input
                  type="text"
                  placeholder="ali_navidi24@yahoo.com"
                  id="email"
                  readOnly
                />
                <div className="pw-input">
                  <input type="password" placeholder="رمز عبور" id="password" />
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
                    placeholder="تکرار رمز عبور"
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
                <button id="prime-btn" onClick={changePassword}>
                  ویرایش
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
