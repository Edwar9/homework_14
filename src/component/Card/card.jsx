import React from "react"
import Butbot from "./Butbot/butbot";
import "./card.css"

const Card = ({image, text, date}) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt="" />
      <div className="card-footer">
        <div className="card-sign">
            <p className="card-text">{text}</p>
            <p className="card-date">{date}</p>
        </div>
        <Butbot />
      </div>
    </div>
  )
};

export default Card;
