import React from 'react'
import speaker from '../../assets/icons/speaker.svg'
import './UpdateButton.css'

export default function UpdateButton() {
  return (
    <div>
      <div className='update-button items-center  bg-[#1b1b1b] rounded-[54px]  text-white py-[15px] px-[30px]'>
        <p className='inline-block text-[24px] font-light mr-[0px] lg:mr-[32px]'>5+ Kuza Updates</p>
        <img className='inline-block w-10 h-10' src={speaker} alt="" />
      </div>
    </div>
  )
}
