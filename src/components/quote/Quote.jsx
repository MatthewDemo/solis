import React from "react";
import "./Quote.scss";
import CommasOrange from "../../images/commas-orange.svg";
import CommasBlue from "../../images/commas-blue.svg";
import QuoteBackground from "../../images/quote-background.svg";
import { useSelector } from "react-redux";

const Quote = () => {
  const isBlack = useSelector((state) => state.theme.isBlack);
  const commasImage = isBlack ? CommasBlue : CommasOrange;

  return (
    <div
      className="quote"
      style={{ backgroundImage: `url(${QuoteBackground})` }}
    >
      <img src={commasImage} alt="" />
      <h1>
        Solis Group serves as a liquidity nexus that gives stablecoin issuers,
        holders and exchanges certainty over access and liquidity
      </h1>
      <p>Lennon Burnett, Solis Group CEO </p>
    </div>
  );
};

export default Quote;
