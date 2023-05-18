import React from "react";
import "./FirstTextBlock.scss";

const FirstTextBlock = ({ isBlack }) => {
  const firstTextBlockClassName = isBlack
    ? "first-text-block first-text-block-black"
    : "first-text-block";

  return (
    <div className={firstTextBlockClassName}>
      <h1>
        A peer-to-peer stablecoin <span>clearinghouse</span> for the new economy
      </h1>
      <p>
        We are bringing real solutions to the payments world by leveraging
        public blockchains
      </p>
      <span className="join-now-button">Join now</span>
    </div>
  );
};

export default FirstTextBlock;
