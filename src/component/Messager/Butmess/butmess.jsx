import React from "react"
import "./butmess.css"

const Butmess = ({text}) => {
  return (
    <div className="butmess">
      <button className="image">
        <img src={text} alt="" />
      </button>
    </div>
  )
};

export default Butmess;
