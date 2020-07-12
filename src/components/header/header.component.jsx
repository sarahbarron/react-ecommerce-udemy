import React from "react";
import "./header.styles.scss";
// Reacts way of importing SVG
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <link className="logo-container" to="/">
      {/* <Logo className='logo' /> */}
    </link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
