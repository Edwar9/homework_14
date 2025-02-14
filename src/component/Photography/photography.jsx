import React from "react"
import Choice from "./Choice/choice"
import "./photography.css"

const Photography = () => {
  return (
    <div className="photography">
        <Choice text = {"EVENT"} />
        <Choice text = {"COMERCIAL"} />
        <Choice text = {"PRODUCT"} />
        <Choice text = {"WEDDING"} />
        <Choice text = {"LANDSCAPE"} />
        <Choice text = {"BRANDING"} />
        <Choice text = {"PORTRAIT"} />
      </div>
  )
};

export default Photography;
