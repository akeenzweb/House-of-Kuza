import React from 'react'
import './WhyKuzaTest.css'
import logo from '../../../assets/images/logo.jpg'
import background from '../../../assets/images/black-background.jpg'

export default function WhyChooseKuxa() {
    const aboutKuza = "Step into the world of KUZA, where fashion transcends the ordinary. Choosing KUZA is an ode to innovation, as our designs not only follow trends but set them with a fusion of global influences and contemporary aesthetics. Crafted with unwavering dedication, each garment showcases the pinnacle of quality craftsmanship, ensuring that style endures through time. KUZA empowers individuality, celebrating diversity and providing a canvas for self-expression through curated collections that cater to a spectrum of tastes. Beyond fashion, we're committed to a sustainable future, embracing eco-friendly materials and ethical manufacturing processes. Experience exceptional customer service from the moment you explore our collections to the day your order arrives. KUZA offers versatile pieces for every occasion, embodying a lifestyle where fashion becomes a statement – a blend of style, sustainability, and a commitment to empowering your unique identity."
  return (
    <div>
      <div className='main-container-box min-h-screen text-white py-14 md:py-20 px-5 md:px-44'>
        <div>
            <h1 className='font-bold text-3xl'>Why Choose</h1>
            <img src={logo} alt="" />
        </div>
        <p className='leading-loose w-full md:w-[870px] my-5 md:my-20'>
            {aboutKuza}
        </p>
        <div className="img-container-box">
            <img className='image-2 object-cover w-screen h-full' src={background} alt="" />
            {/* <div className="overlay"></div> */}
        </div>
      </div>
    </div>
  )
}
