import React, { useRef } from "react";
import Choice from "./Choice/choice";
import "./photography.css";

const Photography = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("active");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // скорость скролла
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="photography"
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Choice text="EVENT" />
      <Choice text="COMERCIAL" />
      <Choice text="PRODUCT" />
      <Choice text="WEDDING" />
      <Choice text="LANDSCAPE" />
      <Choice text="BRANDING" />
      <Choice text="PORTRAIT" />
    </div>
  );
};

export default Photography;

