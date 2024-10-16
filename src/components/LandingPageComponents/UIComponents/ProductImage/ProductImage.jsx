import React from 'react'
import './ProductImage.css'

export default function ProductImage({ProductImage, onClick}) {
  return (
    <div>
        <div className='w-screen image-box lg:w-[280px] md:w-[200px] h-[450px] lg:h-[340px] md:h-[280px] relative'>
            <img src={ProductImage} alt="" className='w-full h-full object-cover image'/>
            <button onClick={onClick} className='hidden-button block lg:hidden absolute quick-add-button text-[18px] py-[20px] px-[40px] md:py-[10px] md:px-[10px] lg:py-[20px] lg:px-[40px]  mt-[28px]'>Quick Add</button>
        </div>
    </div>
  )
}
