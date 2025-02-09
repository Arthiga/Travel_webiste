import React from 'react'
import { BsHeartFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
      <div className='flex items-center m-auto justify-center'>
        <BsHeartFill size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold to-gray-700'>Voyage-Vibes</h1>
        </div>
    </div>
  )
}

export default Footer
