import React from "react";
import "./Benefits.scss";

const Benefits = ({isBlack}) => {
    const benefitsClassName = isBlack
  ? "benefits benefits-black"
  : "benefits";
  return (
    <div className={benefitsClassName}>
      <ul>
        <li>
          <h1>
            Qualified <span>traders</span> and liquidty <span>solutions</span>
          </h1>
          <p>
            Trade easily and efficiently between 12 stablecoins, including USDT,
            TrueUSD, Dai, Eurs and Gemini Dollar.
          </p>
        </li>
        <li>
          <h1>
            The best payments <span>solutions</span>{" "}
          </h1>
          <p>
            For all stablecoin payments, from point-of-sale transactions to
            website solutions. If you use stablecoins in your business,
            Stablehouse is for you.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h1>
            Settlement/OTC API and <span>integration</span>
          </h1>
          <p>
            Integrate OTC operations and settlements using our efficient API.
          </p>
        </li>
        <li>
          <h1>
            <span>Treasury</span> and <span>returns</span> for stablecoin stores
          </h1>
          <p>
            Automate your stablecoin store with instant payments and on-the-fly
            conversion between different stablecoins.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Benefits;
