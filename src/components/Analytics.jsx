import React from 'react'
import Laptop from '../assets/laptop.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, mollitia laudantium eos praesentium provident sequi quo beatae ullam quod pariatur autem, recusandae temporibus ab odio non consectetur eligendi? Neque, dolor.
                </p>
                <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics