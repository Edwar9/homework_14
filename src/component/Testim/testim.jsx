import React from "react";
import Chap from "../Chap/chap";
import Named from "../Named/named";
import View from "../View/view";
import Button from "../Button/button";
import "./testim.css";
import ReviewCard from "./ReviewCard/reviewcard";

const Testim = () => {
  return (
    <div className="testim">
      <div className="testim-header">
        <div className="testim-title">
          <Chap text={"TESTIMONIALS"} />
          <Named text={"WHAT MY CLIENTS SAY"} />
          <p className="total">Total Reviews</p>
          <p className="num">323</p>
        </div>
        <div className="testim-nav">
          <View />
          <Button text={"View All Testimonials"} />
        </div>
      </div>
      <div className="cards">
        <ReviewCard
          name={"Emily Johnson"}
          adress={"USA, California"}
          review={
            "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
          }
          rating={"5"}
        />
        <ReviewCard
          name={"John Smith"}
          adress={"USA, California"}
          review={
            "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves."
          }
          rating={"5"}
        />
        <ReviewCard
          name={"Samantha Davis"}
          adress={"USA, California"}
          review={
            "I was blown away by Damien's ability to capture the essence of our wedding day. Hes photographs are our cherished memories."
          }
          rating={"5"}
        />
      </div>
    </div>
  );
};

export default Testim;
