import React from "react";
import "./Footer.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const isBlack = useSelector((state) => state.theme.isBlack);
  const footerClassName = isBlack ? "footer footer-black" : "footer";
  return (
    <div className={footerClassName}>
      <span>© 2020 Solisgroup. All Rights Reserved.</span>
      <div>
        <span>made by:</span> <p>Zgraya.digital</p>
      </div>
      <div>
        <p>User Agreement</p> <p> Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
