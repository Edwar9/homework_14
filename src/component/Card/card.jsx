import React from "react"
import Butbot from "./Butbot/butbot";
import "./card.css"

const Card = ({image, text, date}) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="footer">
        <div className="sign">
            <p className="text">{text}</p>
            <p className="date">{date}</p>
        </div>
        <Butbot />
      </div>
    </div>
  )
};

export default Card;
