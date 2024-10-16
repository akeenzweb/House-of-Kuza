import React from 'react'
import nextBtn from '../../../../assets/icons/next-btn2.svg'
import './NextIcon.css'

export default function TestComp(props) {
    // const { className, style, onClick } = props;
  return (
    // <div  onClick={onClick}>
    <div>
      <img className="next-btn-icon" src={nextBtn} alt="" />
    </div>
  )
}
