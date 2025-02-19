import React from "react"
import "./butfoot.css"

const Butfoot = ({text}) => {
  return (
    <div className="butfoot">
      <button className="but-link">
        {text}
      </button>
    </div>
  )
};

export default Butfoot;
