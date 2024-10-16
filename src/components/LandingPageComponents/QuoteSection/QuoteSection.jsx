import React from 'react'
import './QuoteSection.css'
import banner from '../../../assets/images/quote-model.jpg'

export default function QuoteSection() {
  return (
    <div className='box h-[400px] md:h-full relative'>
        <h1 className='absolute box-text text-white w-full text-center px-4 md:px-20 text-2xl md:text-4xl'>Elegance is an attitude, and style is the expression. Unleash your unique essence with KUZA, where every stitch tells a story of sophistication and self-expression</h1>
        <img className='w-full h-full object-cover' src={banner} alt="" />
        <div className="dark-overlay"></div>
        {/* <div className=''>
            <div className="relative borderrr ">
            <h1 className='b'>Kuza</h1>
                <img className='w-full h-full object-cover' src={banner} alt="" />
                <div className="dark-overlay"></div>
            </div>
        </div> */}
    </div>
  )
}
