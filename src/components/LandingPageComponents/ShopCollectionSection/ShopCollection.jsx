import React from 'react'
import './ShopCollection.css'
import collection1 from '../../../assets/images/collection-1.jpg'
import collection2 from '../../../assets/images/collection-2.jpg'
import collection3 from '../../../assets/images/collection-3.jpg'
import collection4 from '../../../assets/images/collection-4.jpg'

export default function ShopCollection() {
  return (
    <div>
      <div className='bg-white py-16 collection w-full'>
        <div className='text-center text-2xl md:text-3xl mb-16'>Shop from our Collections</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
            <div className="collection-box h-[600px] md:h-[1180px]">
                <p className='text-5xl'>BOHEMIAN BLISS</p>
                <img className='object-cover w-full h-full collection-image' src={collection1} alt="" />
            </div>
            <div className="collection-box h-[600px] md:h-[1180px] bg-green-500 text-white">
                <p className='text-5xl'>ETHEREAL ESSENCE</p>
                <img className='object-cover w-full h-full collection-image' src={collection2} alt="" />
            </div>
            <div className="collection-box h-[600px] md:h-[1180px] bg-yellow-500 text-white">
                <p className='text-5xl'>CHROMATIC DREAMS</p>
                <img className='object-cover w-full h-full collection-image' src={collection3} alt="" />
            </div>
            <div className="collection-box h-[600px] md:h-[1180px] bg-red-500 text-white">
                <p className='text-5xl'>URBAN MIRAGE</p>
                <img className='object-cover w-full h-full collection-image' src={collection4} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
