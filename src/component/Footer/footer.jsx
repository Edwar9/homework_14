import React from "react";
import "./footer.css";
import Photography from "../Photography/photography";
import Damien from "../../images/Damien.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-header">
          <div className="footer-bg">
            <img src={Damien} alt="" />
          </div>
          <Photography />
        </div>
      </div>
    </>
  );
};

export default Footer;
