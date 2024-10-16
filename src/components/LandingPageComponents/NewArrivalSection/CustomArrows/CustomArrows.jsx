import React from "react";
import './CustomArrows.css'
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon"
// import nextBtn from '../../../../assets/icons/next-btn2.svg'

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`next-btn ${className}`}
      style={{ ...style, display: "block", right: "90px", zIndex: 1}}
      onClick={onClick}
    >
        <NextIcon />
        {/* <img className="next-btn-icon" src={nextBtn} alt="" /> */}
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  left: "90px", zIndex: 1 }}
      onClick={onClick}
    >
        <PreviousIcon />
    </div>
  );
};

export { NextArrow, PrevArrow };
