import React from "react";
import Butmess from "./Butmess/butmess";
import fb from "../../images/fb.png"
import twit from "../../images/twit.png"
import insta from "../../images/insta.png"
import "./messager.css"

const Messager = () => {
  return (
    <div className="messager">
      <Butmess text={fb} />
      <Butmess text={twit} />
      <Butmess text={insta} />
    </div>
  );
};

export default Messager;
