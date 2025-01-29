import React from "react";
import "./title.css";
import Offer from "../Offer/offer";
import title from "../../images/title.png"
import abstract from "../../images/abstract.png"
import Choice from "../Choice/choice";

const Title = () => {
  return (
    <>
      <div className="title">
        <div className="title-name">
          <p>STUNNING PHOTOGRAPHY BY</p>
          <h1 className="name">DANIEN BRAUN</h1>
        </div>
        <div className="abstract">
          <img src={abstract} alt="" />
        </div>
        <Offer />
      </div>
      <div className="container">
        <Choice text = {"EVENT PHOTOGRAPHY"} />
        <Choice text = {"COMERCIAL PHOTOGRAPHY"} />
        <Choice text = {"PRODUCT PHOTOGRAPHY"} />
        <Choice text = {"WEDDING PHOTOGRAPHY"} />
        <Choice text = {"LANDSCAPE PHOTOGRAPHY"} />
        <Choice text = {"BRANDING PHOTOGRAPHY"} />
        <Choice text = {"PORTRAIT PHOTOGRAPHY"} />
      </div>
      <div className="title-img">
        <img src={title} alt="" />
      </div>
    </>
  );
};

export default Title;
