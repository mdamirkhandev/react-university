import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" offset={0} duration={500} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" offset={-260} duration={500} smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" offset={-150} duration={500} smooth={true}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" offset={-260} duration={500} smooth={true}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" offset={-260} duration={500} smooth={true}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            offset={-260}
            duration={500}
            smooth={true}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
