import React from "react";
import LogoImage from "../../images/logo.svg";
import "./Header.scss";

const Header = ({isBlack}) => {
    const navbarClassName = isBlack ? "navbar navbar-black" : "navbar";
    const headerClassName = isBlack ? "header header-black" : "header";

  return (
    <div className={headerClassName}>
      <img src={LogoImage} alt="" className="logo-image" />
      <ul className={navbarClassName}>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Use cases</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </div>
  );
};

export default Header;
