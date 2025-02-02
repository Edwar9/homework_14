import React from "react";
import "./services.css";
import Chap from "../Chap/chap";
import Named from "../Named/named";
import View from "../View/view";
import Button from "../Button/button";
import services from "../../images/services.png";
import Butclick from "../Butclick/butclick";
import Clipser from "../Clipser/clipser";

const Services = () => {
  return (
    <div className="services">
      <div className="services-header">
        <div className="section">
          <Chap text={"SERVICES"} />
          <Named text={"MY PHOTOGRAPHY SERVICES"} />
        </div>
        <div className="services-nav">
          <View />
          <Button text={"View All Services ->"} />
        </div>
      </div>
      <div className="services-main">
        <div className="services-events">
          <div className="container-top">
            <div className="container-header">
              <p className="events">EVENTS</p>
              <Butclick />
            </div>
            <p className="text-s">
              Our event photography service is dedicated to capturing the magic
              of your special occasions. Whether it's a wedding, corporate
              event, or milestone celebration, we're there to document every
              heartfelt moment. We blend into the background, ensuring natural
              and candid shots that reflect the emotions of the day.
            </p>
          </div>
          <div className="container-bottom">
            <p className="s-h-l">Service HighLights</p>
            <div className="list">
                <Clipser text = {"Coverage for weddings, parties, corporate functions, and more."} />
                <Clipser text = {"Skilled photographers who know how to seize the moment."} />
                <Clipser text = {"A mix of candid and posed shots for a comprehensive story."} />
                <Clipser text = {"Quick turnaround for you to relive the day's highlights."} />
            </div>
          </div>
        </div>
        <img src={services} alt="" />
      </div>
    </div>
  );
};

export default Services;
