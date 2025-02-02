import React from "react";
import Button from "../Button/button";
import "./about.css";
import about from "../../images/about.png";
import Info from "../Info/info";
import Butmess from "../Butmess/butmess";
import fb from "../../images/fb.png"
import twit from "../../images/twit.png"
import insta from "../../images/insta.png"

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <div className="about-title">
          <p className="word">ABOUT</p>
          <p className="about-name">I AM DAMIEN</p>
        </div>
        <Button text={"Know More ->"} />
      </div>
      <div className="about-container">
        <img src={about} alt="" />
        <div className="container-info">
          <div className="intro">
            <Info text={"Introduction"} />
            <p className="paragraph">
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world's beauty as I see it. Based in the
              enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
            </p>
          </div>
          <div className="line"></div>
          <div className="contacts">
            <Info text = {"Contact Information"} />
            <div className="personal">
                <div className="mail">
                    <p className="email">Email</p>
                    <br />
                    <a href="mailto:damienbraun@gmail.com">damienbraun@gmail.com</a>
                </div>
                <div className="number">
                    <p className="phone">Phone Number</p>
                    <br />
                    <a href="tel:+00 000000000">+00 000000000</a>
                </div>
            </div>
            <div className="social">
                <div className="messager">
                    <Butmess text = {fb} />
                    <Butmess text = {twit} />
                    <Butmess text = {insta} />
                </div>
                <Button text = {"Let's Work"} />
                <Button text = {"Donload CV"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
