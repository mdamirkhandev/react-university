import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="sass.html">Home</a>
        </li>
        <li>
          <a href="badges.html">Program</a>
        </li>
        <li>
          <a href="collapsible.html">About Us</a>
        </li>
        <li>
          <a href="collapsible.html">Campus</a>
        </li>
        <li>
          <a href="collapsible.html">Testimonials</a>
        </li>
        <li>
          <button className="btn">Contacts</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
