import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import ShopCollection from '../../components/LandingPageComponents/ShopCollectionSection/ShopCollection'
import QuickAdd from '../../components/LandingPageComponents/QuickAddSection/QuickAdd'
import message from '../../assets/icons/message.svg'
import NewArrival from '../../components/LandingPageComponents/NewArrivalSection/NewArrival'
import QuoteSection from '../../components/LandingPageComponents/QuoteSection/QuoteSection'
import FaqSection from '../../components/LandingPageComponents/FaqSection/FaqSection'
import WhyChooseKuza from '../../components/LandingPageComponents/WhyChooseKuza/WhyChooseKuza'
import SizeChartSection from '../../components/LandingPageComponents/SizeChartSection/SizeChartSection'
import WhyKuzaTest from '../../components/LandingPageComponents/WhyKuzaTest/WhyKuzaTest'

export default function Home() {
  return (
    <div>
        <div className='relative'>
             <button className='chat flex items-center fixed right-[24px] md:right-[60px] bg-[#1b1b1b] rounded-[50%] md:rounded-[54px] bottom-5 text-white px-[12px] py-[12px] md:py-[12px] md:px-[30px]'>
                <img  className='mr-0 md:mr-[16px]' src={message} alt="message-icon" />
                <h3 className='hidden md:block'>Chat with us</h3>
            </button>

            <Banner className='banner' />
            <ShopCollection className='w-screen' />
            <NewArrival />
            <QuickAdd className='w-screen' />
            <QuoteSection />
            <FaqSection />
            <WhyChooseKuza />
            <SizeChartSection />
            {/* <WhyKuzaTest /> */}

        </div>
    </div>
  )
}
