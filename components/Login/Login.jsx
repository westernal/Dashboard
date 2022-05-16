import { useRouter } from "next/router";
import { toast } from "react-toastify";
import HeadTags from "../Extras/HeadTags";

const Login = () => {
  const route = useRouter();

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
    // router.push("/");
    toast.success("با موفقيت وارد شديد.");
    route.push("/dashboard");
    // }
  }

  function checkInputs(e) {
    e.preventDefault();

    const password = document.getElementById("password");
    const email = document.getElementById("email");

    if (email.value == "") {
      toast.error("ایمیلی وارد نشد");
    }

    if (password.value < 6) {
      toast.error("کلمه عبور اشتباه است");
    } else logIn(email.value, password.value);
  }

  return (
    <div className="login-page flex">
      <HeadTags title={"ورود"} />
      <div className="flex">
        <img src="/vercel.svg" alt="logo" id="logo" />
      </div>
      <div className="login-form">
        <div className="inputs">
          <input type="text" placeholder="ایمیل" id="email" />
          <div className="pw-input">
            <input type="password" placeholder="رمز عبور" id="password" />
            <a href="#" onClick={showPassword}>
              <img src="/Images/eye-svgrepo-com.svg" alt="Show Password" />
            </a>
          </div>
        </div>
        <div className="flex">
          <button id="prime-btn" onClick={checkInputs}>
            ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
