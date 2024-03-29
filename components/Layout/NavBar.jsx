import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const NavBar = () => {
  const router = useRouter();

  function closenav(e) {
    e.preventDefault();
    document.getElementsByClassName("navbar")[0].style.width = "0%";
  }

  function logOut(e) {
    e.preventDefault();

    localStorage.removeItem("token");
    toast.success("Logged out successfuly");
    router.push("/");
  }

  return (
    <div className="navbar">
      <a
        href="#"
        className="closebtn"
        id="responsive"
        onClick={closenav}
        aria-label="close button"
      >
        &times;
      </a>
      <Link href={"/profile"}>
        <a>
          <div className="profile-info flex">
            <div className="user-img flex">
              <img src="/Images/profile-svgrepo-com.svg" alt="user's picture" />
            </div>
            <p id="username">Ali Navidi</p>
          </div>
        </a>
      </Link>

      <div className="nav-items">
        <Link href="/dashboard">
          <a>
            <div className="nav-item flex" id="dash-item">
              <img src="/Images/dashboard-svgrepo-com.svg" alt="Dashboard" />
              <p>Dashboard</p>
            </div>
          </a>
        </Link>

        <Link href="/profile">
          <a>
            <div className="nav-item flex" id="profile-item">
              <img src="/Images/profile-svgrepo-com.svg" alt="Profile" />
              <p>Profile</p>
            </div>
          </a>
        </Link>

        <Link href="/products">
          <a>
            <div className="nav-item flex" id="products-item">
              <img src="/Images/products-svgrepo-com.svg" alt="Products" />
              <p> Products</p>
            </div>
          </a>
        </Link>

        <Link href="/users">
          <a>
            <div className="nav-item flex" id="users-item">
              <img src="/Images/users-svgrepo-com.svg" alt="Users" />
              <p> Users</p>
            </div>
          </a>
        </Link>

        <Link href="/orders">
          <a>
            <div className="nav-item flex" id="orders-item">
              <img src="/Images/cart 1.svg" alt="Orders" />
              <p> Orders</p>
            </div>
          </a>
        </Link>

        <Link href="/branches">
          <a>
            <div className="nav-item flex" id="branches-item">
              <img src="/Images/branches-svgrepo-com.svg" alt="Branches" />
              <p> Branches</p>
            </div>
          </a>
        </Link>

        <a href="#" onClick={logOut}>
          <div className="nav-item flex">
            <img src="/Images/icons8-logout-24.png" alt="logout" />
            <p id="logout-color">Logout</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
