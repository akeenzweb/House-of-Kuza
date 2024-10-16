import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewArrival.css'
import { NextArrow, PrevArrow } from './CustomArrows/CustomArrows';
import ProductImage from '../UIComponents/ProductImage/ProductImage';
import model4 from '../../../assets/images/model-4.jpg'
import model5 from '../../../assets/images/model-5.jpg'
import model6 from '../../../assets/images/model-6.jpg'
import model7 from '../../../assets/images/model-7.jpg'
import model8 from '../../../assets/images/model-8.jpg'
import model9 from '../../../assets/images/model-9.jpg'

import product from '../../../assets/icons/product.svg'
import shipping from '../../../assets/icons/shipping.svg'
import premium from '../../../assets/icons/premium.svg'
// import NextIcon from './CustomArrows/NextIcon'

function NewArrival() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const ProdImg = model4
    return (
      <div className="slider-container bg-white pl-0 md:pl-0 md:p-16 pb-40 relative overflow-x-hidden">
        <div className='text-center text-2xl md:text-3xl mb-20'>New Arrivals</div>
        <div className='w-screen overflow-x-hidden'>
          <Slider {...settings} className='md:pl-8 slider overflow-x-hidden'>
            <div className='group w-full text-center relative'>
              <div className='w-full text-center'>
                  {/* <div className='w-screen image-box md:w-[317px] h-[390px] relative'>
                      <img src={model4} alt="" className='w-full object-cover'/>
                      <button className='hidden-button hidden absolute quick-add-button text-[18px] py-[20px] px-[40px] mt-[28px]'>Quick Add</button>
                  </div> */}
                  <ProductImage ProductImage={model4} />
                  <div className='mt-4 mb-8 text-center md:text-left w-[100%] md:w-[85%] '>
                      <h1 className='text-xl font-semibold'>Elegant Evening Ensemble</h1>
                      <h1 className='text-xl mt-2'>₦213,340.00</h1>
                      <h1 className='text-xl mt-2 uppercase'>2 COLORS AVAILABLE</h1>
                  </div>
              </div>
            </div>
            <div className='group w-full text-center relative'>
              <div className='w-full text-center'>
                  <ProductImage ProductImage={model5} />
                  <div className='mt-4 mb-8 text-center md:text-left w-[100%] md:w-[85%] '>
                      <h1 className='text-xl font-semibold'>Elegant Evening Ensemble</h1>
                      <h1 className='text-xl mt-2'>₦213,340.00</h1>
                      <h1 className='text-xl mt-2 uppercase'>2 COLORS AVAILABLE</h1>
                  </div>
              </div>
            </div>
            <div className='group w-full text-center relative'>
              <div className='w-full text-center'>
                  <ProductImage ProductImage={model6} />
                  <div className='mt-4 mb-8 text-center md:text-left w-[100%] md:w-[85%] '>
                      <h1 className='text-xl font-semibold'>Elegant Evening Ensemble</h1>
                      <h1 className='text-xl mt-2'>₦213,340.00</h1>
                      <h1 className='text-xl mt-2 uppercase'>2 COLORS AVAILABLE</h1>
                  </div>
              </div>
            </div>
            <div className='group w-full text-center relative'>
              <div className='w-full text-center'>
                  <ProductImage ProductImage={model7} />
                  <div className='mt-4 mb-8 text-center md:text-left w-[100%] md:w-[85%] '>
                      <h1 className='text-xl font-semibold'>Elegant Evening Ensemble</h1>
                      <h1 className='text-xl mt-2'>₦213,340.00</h1>
                      <h1 className='text-xl mt-2 uppercase'>2 COLORS AVAILABLE</h1>
                  </div>
              </div>
            </div>
            <div className='group w-full text-center relative'>
              <div className='w-full text-center'>
                  <ProductImage ProductImage={model8} />
                  <div className='mt-4 mb-8 text-center md:text-left w-[100%] md:w-[85%] '>
                      <h1 className='text-xl font-semibold'>Elegant Evening Ensemble</h1>
                      <h1 className='text-xl mt-2'>₦213,340.00</h1>
                      <h1 className='text-xl mt-2 uppercase'>2 COLORS AVAILABLE</h1>
                  </div>
              </div>
            </div>
            <div className='group w-full text-center relative'>
              <div className='w-full text-center'>
                  <ProductImage ProductImage={model9} />
                  <div className='mt-4 mb-8 text-center md:text-left w-[100%] md:w-[85%] '>
                      <h1 className='text-xl font-semibold'>Elegant Evening Ensemble</h1>
                      <h1 className='text-xl mt-2'>₦213,340.00</h1>
                      <h1 className='text-xl mt-2 uppercase'>2 COLORS AVAILABLE</h1>
                  </div>
              </div>
            </div>
            
          </Slider>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 mx-16 ">
            <div className="flex items-center justify-center py-10 px-2 ">
              <div className="text-center">
                <img className="mx-auto" src={product} alt="Product" />
                <h1 className='my-6 text-3xl'>PREMIUM MATERIALS</h1>
                <h2>Each garment in our collection is crafted using superior-quality fabrics, threads, and meticulous accent details</h2>
              </div>
            </div>

            <div className="flex items-center justify-center py-10 px-2 ">
              <div className="text-center">
                <img className="mx-auto" src={shipping} alt="Product" />
                <h1 className='my-6 text-3xl'>PREMIUM SERVICE</h1>
                <h2>Experience a hassle-free, premium service from the moment you place your order to its swift shipment</h2>
              </div>
            </div>

            <div className="flex items-center justify-center py-10 px-2 ">
              <div className="text-center">
                <img className="mx-auto" src={premium} alt="Product" />
                <h1 className='my-6 text-3xl'>PREMIUM MATERIALS</h1>
                <h2>Each garment in our collection is crafted using superior-quality fabrics, threads, and meticulous accent details</h2>
              </div>
            </div>

            

          </div>
        </div>
        
      </div>
    );
  }
  
  export default NewArrival;
