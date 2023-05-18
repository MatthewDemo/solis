import React from "react";
import "./Promises.scss";
import PromisesBackground from "../../images/promises-background-image.svg";

const Promises = ({ isBlack }) => {
  const promisesClassName = isBlack ? "promises promises-black" : "promises";
  return (
    <div className={promisesClassName}>
      <img src={PromisesBackground} alt="" />
      <div className="promises-content">
        <div className="promises-content-item1">
          <h2>On-Exchange Trading</h2>
          <p>Instant </p>
          <p>Passive Inventory earns fees</p>
        </div>
        <div className="promises-content-item2">
          <h2>On-Chain Swaps</h2>
          <p>Low Counterparty risk </p>
          <p>Direct transfers</p>
        </div>
        <div className="promises-content-item3">
          <h2>Time Settlement Swaps</h2>
          <p>LBTC / Lightning and other sidechain swaps</p>
        </div>
        <button className="join-now-button">Join now</button>
      </div>
    </div>
  );
};

export default Promises;
