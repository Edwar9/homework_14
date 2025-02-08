import React from "react"
import Chap from "../Chap/chap";
import Named from "../Named/named"
import View from "../View/view"
import Button from "../Button/button"
import Card from "../Card/card";
import image1 from "../../images/Image1.png"
import image2 from "../../images/Image2.png"
import image3 from "../../images/Image3.png"
import "./portfolio.css"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <div className="section">
            <Chap text = {"Portfolio"}/>
            <Named text = {"EXPLORE MY PHOTOGRAPHY WORK."} />
        </div>
        <div className="portfolio-nav">
            <View />
            <Button text = {"View All Works ->"} />
        </div>
      </div>
      <div  className="portfolio-main">
        <Card image ={image1} text = {"Faces of Resilience"} date ={"March 2022"}/>
        <Card image ={image2} text = {"A Wedding Tale"} date ={"January 2020"}/>
        <Card image ={image3} text = {"Product Elegance"} date ={"Januare 2020"}/>
      </div>
    </div>
  )
};

export default Portfolio;
