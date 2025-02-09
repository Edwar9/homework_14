import React from "react";
import shape from "../../../../images/shape.png";
import "./stars.css";

const Stars = ({ rating }) => {
  return (
    <div className="stars">
      {Array(5)
        .fill(<img src={shape} alt="" />)
        .map((star, index) => (
          <span key={index} style={{ opacity: index < rating ? 1 : 0.3 }}>
            {star}
          </span>
        ))}
    </div>
  );
};

export default Stars;
