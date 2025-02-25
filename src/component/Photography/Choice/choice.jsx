import React from "react";
import clip from "../../../images/clip.png";
import "./choice.css";

const Choice = ({ text }) => {
  return (
    <button className="choice">
      <img className="clip" src={clip} alt="" />
      <div className="text">
        {text}
        <p>PHOTOGRAPHY</p>
      </div>
    </button>
  );
};

export default Choice;
