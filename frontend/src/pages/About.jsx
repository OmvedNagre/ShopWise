import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Staitc Dummy-1</p>
        <p>Static Dummy-2</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at ShopWise is </p>
        </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-5'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 md:flex-1'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600' >All products go through strict quality checks before dispatch. We offer secure payment processing and simple return options for complete peace of mind. Experience safe, reliable, and worry-free shopping with us.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 md:flex-1'>
          <b>Convenience:</b>
          <p className='text-gray-600' >Shop comfortably with a platform designed for maximum convenience. From intuitive navigation and quick product discovery to fast checkout and flexible delivery options — everything is built to make your experience easier and stress-free.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 md:flex-1'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600' >Experience exceptional customer service with our committed support team. Whether you have questions, need assistance, or require personalized guidance, we’re here to help with quick responses, friendly communication, and a customer-first approach. Your satisfaction is our priority.</p>
        </div>
      </div>
      <NewsletterBox/>

    </div>
  )
}

export default About