import React from 'react'
import { Link } from 'react-router-dom';
import './Banner.css'
import Update from '../KuzaUpdateButton/UpdateButton'
import banner from '../../assets/images/banner.jpg'

export default function Banner() {
  return (
    <div>
        {/* <div className='banner-box mt-12'>
            <div className='brand-section mt-[-35px]'>
                <h1 className='brand-name'>Kuza</h1>
                <p className='text-[32px] mt-[-40px]'>Style is our Heritage</p>
                <button className='text-[18px] py-[20px] px-[40px] rounded-[10px] mt-[28px]'>Shop Now</button>
            </div>
            <div className="img-container">
                <img className='banner' src={banner} alt="" />
            </div>
        </div> */}

        <div className="container-box h-[80vh] md:h-[100vh] w-full mt-20">
            <div className='brand-section mt-[-35px]'>
                <h1 className='brand-name'>Kuza</h1>
                <p className='text-[32px] mt-[-40px]'>Style is our Heritage</p>
                <Link to="/collections"><button className=' text-[18px] py-[20px] px-[40px] rounded-[10px] mt-[28px]'>Shop Now</button></Link>
            </div>

            
            <div className="img-container-box">
                <img className='image banner object-cover w-full h-full' src={banner} alt="" />
                <div className="overlay"></div>
            </div>

            {/* <Update className=' ' /> */}
            <div className='relative text-center md:text-left md:pl-16 pt-20'>
                <Update className='' />
            </div>
            
            
        </div>
        
    </div>
  )
}
