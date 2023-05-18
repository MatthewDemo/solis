import React from "react";
import LogoImage from "../../images/logo.svg";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const isBlack = useSelector((state) => state.theme.isBlack);
  const navbarClassName = isBlack ? "navbar navbar-black" : "navbar";
  const headerClassName = isBlack ? "header header-black" : "header";

  return (
    <div className={headerClassName}>
      <img src={LogoImage} alt="" className="logo-image" />
      <ul className={navbarClassName}>
        <li><a target="_blank" href="https://github.com/MatthewDemo?tab=repositories">Home</a></li>
        <li>About</li>
        <li>Products</li>
        <li>Use cases</li>
        <li onClick={() => alert('Я хочу лише від 400$ на місяць')}>Pricing</li>
        <li>Resources</li>
      </ul>
    </div>
  );
};

export default Header;
