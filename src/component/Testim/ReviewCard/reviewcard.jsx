import React from "react"
import Messager from "../../Messager/messager"
import Stars from "./Stars/stars";
import "./reviewcard.css"

const ReviewCard = ({name, adress, review, rating}) => {
  return (
    <div className="reviewcard">
      <div className="reviewcard-header">
        <div className="container">
            <p className="name-card">{name}</p>
            <p className="adress">{adress}</p>
        </div>
        <Messager />
      </div>
      <Stars rating = {rating} />
      <p className="review">{review}</p>
    </div>
  )
};

export default ReviewCard;
