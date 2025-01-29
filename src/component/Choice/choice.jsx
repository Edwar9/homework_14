import React from "react"
import clip from "../../images/clip.png"
import "./choice.css"

const Choice = ({text}) => {
  return (
    <div className="choice">
      <img src={clip} alt="" />
      <div className="text">
        {text}
      </div>
    </div>
  )
};

export default Choice;
