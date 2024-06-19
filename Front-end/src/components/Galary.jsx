import React from 'react'

const Galary = () => {
  return (
    <div id='galary' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Galary</h2>
         <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
        <img className='w-full h-full object-cover' src='https://claimflights.com/wp-content/uploads/Beautiful-place.jpg'
        />
      </div>
      <div >
        <img className='w-full h-full object-cover' src='https://i.pinimg.com/564x/f6/9a/16/f69a16c163d08f352fc39fe6ce5f70ff.jpg'
        />
      </div>
      <div>
        <img className='w-full h-full object-cover' src='https://img.veenaworld.com/wp-content/uploads/2023/09/Famous-Places-in-the-World-Checking-off-the-Ultimate-Bucket-List.jpg'
        />
      </div>
      <div>
        <img className='w-full h-full object-cover' src='https://d2oknibonqa3h8.cloudfront.net/wp-content/uploads/2021/06/Monaco-Grand-Prix-2-819x1024.jpg.webp'
        />
      </div>
      <div>
        <img className='w-full h-full object-cover' src='https://i.pinimg.com/564x/c8/43/b1/c843b1a2cdc681da7216073828d5aaa3.jpg'
        />
      </div>
      </div>
    </div>
  )
}

export default Galary
