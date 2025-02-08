import React from "react";
import Chap from "../Chap/chap";
import Named from "../Named/named";
import Table from "../Table/table";
import "./faq.css"

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-header">
        <Chap text={"FAQ'S"} />
        <Named text={"FREQUENTLY ASKED QUESTIONS"} />
      </div>
      <Table />
    </div>
  );
};

export default Faq;
