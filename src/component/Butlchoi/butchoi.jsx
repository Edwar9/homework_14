import React from "react"
import "./butchoi.css"

const Butchoi = ({text}) => {
  return (
    <div className="choi">
      <button className="vector">
        <img src={text} alt="" />
      </button>
    </div>
  )
};

export default Butchoi;
