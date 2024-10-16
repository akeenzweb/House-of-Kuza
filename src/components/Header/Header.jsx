import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo/logo.svg'
import menu from '../../assets/icons/menu.svg'
import menu2 from '../../assets/icons/menu-2.svg'
import dropDown from '../../assets/icons/drop-down.svg'
import bell from '../../assets/icons/bell.svg'
import bag from '../../assets/icons/bag.svg'
import userProfile from '../../assets/icons/user-profile.svg'

export default function Header() {
    const [currency, setCurrency] = useState("NGN")
  return (
    <div>
        <div className='mb-20'>
            {/* For Larger devices */}
            <div className=' w-full h-20 bg-white hidden md:flex justify-between items-center header px-[62px]'>
                <div><img className='menu' src={menu} alt="" /></div>
                <Link to="/"><div className='logo-div'> <img className='logo' src={logo} alt="logo" /> </div></Link>
                <div className='flex w-[260px] justify-between items-center'>
                    <div className='flex w-[64px] justify-between'>{currency} <img src={dropDown} alt="" /></div>
                    <div><img className='icons' src={bell} alt="" /></div>
                    <div><img className='icons' src={bag} alt="" /></div>
                    <div><img className='icons' src={userProfile} alt="" /></div>
                </div>
            </div>

             {/* For Mobile devices */}
            <div className=' w-full h-20 bg-white flex md:hidden justify-between items-center header px-[24px]'>
            <Link to="/"><div className=''> <img className='logo' src={logo} alt="logo" /> </div></Link>
                <div className='flex'>
                    <div><img className='menu' src={bag} alt="" /></div>
                    <div><img className='menu ml-8' src={menu2} alt="" /></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
