import React from 'react'
import './SizeChartSection.css'
import sizeChart from '../../../assets/images/size-chart.jpg'
import info from '../../../assets/icons/info.svg'

export default function SizeChartSection() {
  return (
    <div>
      <div className='background-block py-16 text-center'>
            <div className='text-center text-2xl md:text-3xl mb-16'>Our Size Chart</div>
            <div className='text-center flex justify-center'>
                <img src={sizeChart} alt="" />
            </div>
            <div className='mt-14 p-4 flex justify-center items-start md:items-center'>
                <img src={info} alt="" />
                <p className='font-semibold'>You have the option to personalize your size by entering your specific measurements for the chosen outfit.</p>
            </div>
      </div>
    </div>
  )
}
