import React from 'react';
import {BsHeartFill} from 'react-icons/bs';
import {AiFillPhone,AiOutlineClockCircle} from 'react-icons/ai';
function TopBar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex item-center'>
            <BsHeartFill size={30} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-600'>Voyage-Vibes</h1>
        </div>
        <div className='flex'>
          <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
          <p className='text-sm text-gray-700'>9AM-4PM</p>
          </div>
          <div className='hidden md:flex items-center px-6'>
              <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p className='text-sm text-gray-700'>9080572014</p>
          </div>
          <button>Get a Free Quote</button>
        </div>
    </div>
  )
}

export default TopBar;
