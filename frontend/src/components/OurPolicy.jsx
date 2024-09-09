import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='py-20 flex flex-col justify-around gap-12 sm:flex-row sm:gap-2 text-center text-xs sm:text-sm md:text-base text-gray-700'>
        
        <div className="">
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free Exchange policy</p>
        </div>
        
        <div className="">
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Days Return Policy</p>
            <p className='text-gray-400'>WE provide 7 days free return policy</p>
        </div>
        
        <div className="">
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy