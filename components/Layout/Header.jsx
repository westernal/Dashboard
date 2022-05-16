import HeadTags from "../Extras/HeadTags";
import Link from "next/link";

const Header = ({ title }) => {
  function openNavBar(e) {
    e.preventDefault();

    const navBar = document.getElementsByClassName("navbar")[0];

    navBar.style.width = "50%";
    navBar.style.height = "100%";
  }
  return (
    <div className="header flex">
      <HeadTags title={title} />
      <a href="#" id="responsive">
        <img
          src="/Images/hamburger-menu-svgrepo-com.svg"
          alt="Burger Menu"
          id="responsive"
          onClick={openNavBar}
        />
      </a>
      <p>{title}</p>
      <Link href="/dashboard">
        <a>
          <img src="/vercel.svg" alt="logo" id="logo" />
        </a>
      </Link>
    </div>
  );
};

export default Header;
