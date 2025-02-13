import React from "react";
import Butclick from "../Butclick/butclick";
import "./offer.css"

const Offer = () => {
  return (
    <div className="offer">
      <div className="icon">
        <div className="text">
          <p className="offer-text">LET'S</p>
        </div>
        <Butclick />
      </div>
      <p className="offer-text">WORK TOGETHER</p>
    </div>
  );
};

export default Offer;
