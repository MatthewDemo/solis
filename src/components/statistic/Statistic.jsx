import React from "react";
import StatisticImage from "../../images/statistic-image.svg";
import "./Statistic.scss";
import { useSelector } from "react-redux";

const Statistic = () => {
  const isBlack = useSelector((state) => state.theme.isBlack);
  const statisticClassName = isBlack
    ? "statistic statistic-black"
    : "statistic";
  return (
    <div className={statisticClassName}>
      <img src={StatisticImage} alt="" className="statistic-image" />
      <div className="statistic-block">
        <ul>
          <li className="with-border">
            <h1>
              <span>$</span> 1 tril
            </h1>
            <p>Market cap potential</p>
          </li>

          <li className="with-border">
            <h1>
              <span>$</span> 3.65 mil
            </h1>
            <p>Deposited to platform</p>
          </li>
          <li>
            <h1>12</h1>
            <p>Stablecoins</p>
          </li>
        </ul>
        <div className="statistic-description">
          <p>
            Solis group is a new venture created with investments from and
            collaboration with XBTO International, XBTO Ventures and Phil
            Potter, formerly of bitfinex. Stablehouse is intended to launch a
            first-of-its-kind clearing house for stablecoins that seeks to
            promote the next phase of the market's development.
          </p>

          <p>
            The API-enabled, centralized platform addresses the key issues of
            inconsistent liquidity, stability and accessibility which are
            currently preventing the stablecoin market from reaching critical
            mass.
          </p>
          <span className="contact-sales-button">Contact sales</span>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
