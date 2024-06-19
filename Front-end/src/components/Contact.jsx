import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto p-4 py-16'>
      <h2 className='text-center text-gray-700'>Send us a message</h2>
      <p className='text-center text-gray-700 py-2'>We're Standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img src='https://s1.travix.com/blog/as/asia-vietnam-halong-bay-rocks-nature-boats-small.jpg'
        className='w-full  h-[200px] md:h-full object-cover p-2 max-h-[500px]'/>
        <form action="">
            <div className='grid grid-cols-2'>
               <input className='border m-2 p-2' type='text' placeholder='First' />
               <input className='border m-2 p-2' type='text' placeholder='Last' />
               <input className='border m-2 p-2' type='email' placeholder='Email' />
               <input className='border m-2 p-2' type='tel' placeholder='Phone' />
               <input className='border col-span-2 m-2 p-2' type='text' placeholder='Address' />
               <textarea className='border col-span-2 m-2 p-2' cols='30' rows='18'/>
               <button className='col-span-2 m-2'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
