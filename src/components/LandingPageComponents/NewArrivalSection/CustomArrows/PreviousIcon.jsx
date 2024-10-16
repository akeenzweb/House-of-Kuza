import React from 'react'
import previousBtn from '../../../../assets/icons/previous-btn2.svg'
import './PreviousIcon.css'

export default function TestComp(props) {
    // const { className, style, onClick } = props;
  return (
    // <div  onClick={onClick}>
    <div>
      <img className="previous-btn-icon" src={previousBtn} alt="" />
    </div>
  )
}
