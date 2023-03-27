import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import HeadTags from "../Extras/HeadTags";
import Loader from "../Extras/Loader";

const Login = () => {
  const route = useRouter();
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

  async function logIn(email, password) {
    SetLoader(true);
    // const option = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username: username,
    //     email: email,
    //     password: password,
    //   }),
    //   redirect: "follow",
    // };

    // var result = await API(option, "api/users/signup");

    // if (result.status == 201) {
    //   localStorage.setItem("token", result.data.token);
    toast.success("Loggedin successfuly");
    route.push("/dashboard");
    // } else {
    //   toast.error("مشکلی رخ داده، لطفا دوباره تلاش کنید.");
    //   SetLoader(false);
    // }
  }

  function checkInputs(e) {
    e.preventDefault();

    const password = document.getElementById("password");
    const email = document.getElementById("email");

    if (email.value == "") {
      toast.error("Please enter email.");
    }

    if (password.value < 6) {
      toast.error("Password should be more than 6 characters.");
    } else logIn(email.value, password.value);
  }

  return (
    <>
      {loader && <Loader size={20} />}
      <div className="login-page flex">
        <HeadTags title={"ورود"} />
        <div className="flex">
          <img src="/vercel.svg" alt="logo" id="logo" />
        </div>
        <div className="login-form">
          <div className="inputs">
            <input type="text" placeholder="Email" id="email" />
            <div className="pw-input">
              <input type="password" placeholder="Password" id="password" />
              <a href="#" onClick={showPassword}>
                <img src="/Images/eye-svgrepo-com.svg" alt="Show Password" />
              </a>
            </div>
          </div>
          <div className="flex">
            <button id="prime-btn" onClick={checkInputs}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
