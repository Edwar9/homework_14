import React from "react";
import star from "../../images/star.png";
import "./info.css";

const Info = ({ text }) => {
  return (
    <div className="info">
      <img src={star} alt="" />
      <div className="text-info">{text}</div>
    </div>
  );
};

export default Info;
