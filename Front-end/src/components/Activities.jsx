import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <img src='https://deluxecruises.co.uk/wp-content/uploads/2023/12/Seabourn-Hero-4.jpg'
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>
        <h3 className='absolute z-10 top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruise</h3>
      </div>
      <div className='relative p-4'>
        <img src='https://images.herzindagi.info/image/2024/May/best-adventure-activities-in-maharashtra.jpg'
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>
        <h3 className='absolute z-10 top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Adventure</h3>
      </div>
      <div className='relative p-4'>
        <img src='https://www.zameen.com/blog/wp-content/uploads/2019/04/image-1-51-1024x640.jpg'
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>
        <h3 className='absolute z-10 top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Historic</h3>
      </div>
    </div>
  )
}

export default Activities
