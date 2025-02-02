import React from "react"
import "./clipser.css"
import clips from "../../images/clips.png"

const Clipser = ({text}) => {
  return (
    <div className="clipser">
      <img src={clips} alt="" />
      <div className="text-s">
        {text}
      </div>
    </div>
  )
};

export default Clipser;
