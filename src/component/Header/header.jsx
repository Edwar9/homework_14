/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./header.css";
import Button from "../Button/button";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">DAMIEN</div>
      <nav className="header-nav">
      <Button text = {"Home"} />
      <Button text = {"About me"} />
      <Button text = {"Portfolio"} />
      <Button text = {"Services"} />
      </nav>
      <Button text = {"Contact Me"} />
    </div>
  );
};

export default Header;
