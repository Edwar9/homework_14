import React from "react";
import "./footer.css";
import Photography from "../Photography/photography";
import Damien from "../../images/Damien.png";
import Offer from "../Offer/offer";
import footleft from "../../images/footleft.png" 
import Butfoot from "./Butfoot/butfoot";  
import footright from "../../images/footright.png"

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <img src={Damien} alt="" />
      </div>
      <Photography />
      <div className="footer-main">
        <div className="footer-bg">
          <img src={footleft} alt="" />
        </div>
        <div className="footer-title">
          <p className="title-text">A more meaningful home for photography</p>
          <Offer />
        </div>
        <div className="footer-container">
          <div className="cont-home">
            <p className="text">HOME</p>
            <br />
            <br />
            <Butfoot text = {"ABOUT ME"} />
            <br />
            <Butfoot text = {"MY WORKS"} />
            <br />
            <Butfoot text = {"TESTIMONIALS"} />
          </div>
          <div className="cont-clients">
            <p className="text">CLIENTS</p>
            <br />
            <br />
            <Butfoot text = {"KLOVESTO"} />
            <br />
            <Butfoot text = {"NUKEWAY"} />
            <br />
            <Butfoot text = {"CLOVEN'S"} />
            <br />
            <Butfoot text = {"MENVOL"} />
          </div>
          <div className="cont-portfolio">
            <p className="text">PORTFOLIO</p>
            <br />
            <br />
            <Butfoot text = {"EVENTS"} />
            <br />
            <Butfoot text = {"PORTRAIT"} />
            <br />
            <Butfoot text = {"BRANDING"} />
            <br />
            <Butfoot text = {"COMMERCIALE"} />
            <br />
            <Butfoot text = {"WEDDING"} />
          </div>
          <div className="cont-services">
            <p className="text">SERVICES</p>
            <br />
            <br />
            <Butfoot text = {"PORTRAITS"} />
            <br />
            <Butfoot text = {"EVENTS"} />
            <br />
            <Butfoot text = {"COMMERCIAL"} />
          </div>
        </div>
        <div className="footer-bg">
          <img src={footright} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
