import React from "react"
import topr from "../../../images/topr.png"
import "./butbot.css"

const Butbot = () => {
  return (
    <div className="butbot">
      <button className="but">
        <p className="but-text">VIEW PROJECT</p>
        <img src={topr} alt="arrow" />
      </button>
      
    </div>
  )
};

export default Butbot;
