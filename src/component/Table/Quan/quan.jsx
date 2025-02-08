import React, { useState } from "react";
import "./quan.css"
import down from "../../../images/down.png"
import up from "../../../images/up.png"

const Quan = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="quan">
      <div className="quan-header">
        <p className="quan-question">{question}</p>
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <img src={up} alt="" /> : <img src={down} alt="" />}
        </button>
      </div>
      {isOpen && <p className="quan-answer">{answer}</p>}
    </div>
  );
};

export default Quan;
