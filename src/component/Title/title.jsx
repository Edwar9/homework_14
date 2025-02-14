import React from "react";
import "./title.css";
import Offer from "../Offer/offer";
import title from "../../images/title.png"
import abstract from "../../images/abstract.png"
import Photography from "../Photography/photography";

const Title = () => {
  return (
    <>
      <div className="title">
        <div className="title-name">
          <p>STUNNING PHOTOGRAPHY BY</p>
          <h1 className="name">DAMIEN BRAUN</h1>
        </div>
        <div className="abstract">
          <img src={abstract} alt="" />
        </div>
        <Offer />
      </div>
      <Photography />
      <div className="title-img">
        <img src={title} alt="" />
      </div>
    </>
  );
};

export default Title;
