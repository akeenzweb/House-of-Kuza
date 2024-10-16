import React from 'react'
import { Link } from 'react-router-dom';
import './QuickAdd.css'
import model2 from '../../../assets/images/model-2.jpg'
import model3 from '../../../assets/images/model-3.jpg'
import linePattern from '../../../assets/images/line-pattern.svg'
import previousButton from '../../../assets/icons/previous-btn.svg'
import nextButton from '../../../assets/icons/next-btn.svg'


export default function QuickAdd() {
  return (
    // <div className="box-section relative bg-white w-full py-20 px-0 md:px-16py-16 mt-[-150px] md:mt-0">
    <div className="box-section-box relative bg-white w-full py-20 px-0 md:px-16py-16 mt-[-150px] md:mt-0">
        <img className='absolute line-pattern' src={linePattern} alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
        <div className='text-center relative flex justify-center items-center mb-40 md:mb-0'>
            <div className='w-[292px] md:w-[494px] h-[262px] md:h-[465px] '>
                <img className='object-cover' src={model2} alt="" />
            </div>
        </div>
        
        <div className='text-center relative flex justify-center pr-0 md:pr-20 indexing'>
            <div className='text-box w-full'>
                <p className=' font-medium text-4xl mt-20 md:mt-0 '>Style Speaks Louder Than Words – Make a Statement Today</p>
                <Link to="/collections"><button className=' text-[18px] py-[20px] px-[40px] rounded-[10px] mt-[28px] button-scale'>Shop Now</button></Link>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-60 md:mt-20">
        {/* For Larger screens */}
        <div className=' order-2 md:order-1 w-full text-left py-16 px-8 md:px-20 indexing'>
            <p className='hidden md:block w-full  text-3xl '>SHOP THE MONACO EDIT</p>
            <div className='mt-14 text-left '>
                <h1 className='text-2xl font-semibold'>Elegant Evening Ensemble</h1>
                <h1 className='text-xl mt-2'>₦213,340.00</h1>
                <h1 className='text-xl mt-2 uppercase'>2 COLORS AVAILABLE</h1>
            </div>
            <button className='add-button text-[18px] py-[20px] px-[40px] mt-[28px] button-scale'>Quick Add</button>
            <div className='hidden md:flex justify-between mt-10'>
                <img className='w-16 button-scale' src={previousButton} alt="" />
                <img className='w-16 button-scale' src={nextButton} alt="" />
            </div>
        </div>

        {/* For Mobile Screens */}
        <div className='order-1 md:order-2'>
            <div className='text-center w-full mb-8 block md:hidden'>
                <p className='w-full  text-2xl md:text-3xl '>SHOP THE MONACO EDIT</p>
            </div>
            <div className='text-center relative flex justify-center  md:w-[564px] w-screen h-[100%] md:h-[515px] '>
                <img className='object-cover' src={model3} alt="" />
                <div className='flex md:hidden w-screen px-10 justify-between mt-10 image-button absolute'>
                    <img className='w-16' src={previousButton} alt="" />
                    <img className='w-16' src={nextButton} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
