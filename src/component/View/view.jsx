import React from "react"
import "./view.css"
import Butchoi from "../Butlchoi/butchoi";
import left from "../../images/left.png"
import right from "../../images/right.png"

const View = () => {
  return (
    <div className="view">
      <Butchoi text = {left} />
      <Butchoi text = {right} />
    </div>
  )
};

export default View;
