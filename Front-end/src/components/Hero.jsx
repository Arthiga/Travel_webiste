import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src='https://hips.hearstapps.com/hmg-prod/images/hbz-travel-index4-1-1547062721.gif?crop=1.00xw:1.00xh;0,0&resize=1200:*'
      className='w-full h-full object-cover'
      />
      <div className='max-w-[1140px] m-auto'>
      <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
        <h1 className='font-bold text-4xl'>Explore Beauty of The World</h1>
        <h2 className='text-4xl py-4 italic'>With WEEKAWAY</h2>
        <p> 
        Exploring new destinations unveils the richness of human diversity and the vastness of natural wonders, 
        providing unforgettable experiences and lifelong memories.Each place on earth is a masterpiece of its own, from the lush rainforests of Costa Rica to 
        the timeless allure of ancient Greek ruins, each offering a unique charm and splendor.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Hero
