import React from 'react'
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl text-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Single} alt=''/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font'>
                    <p className='py-2 mx-8 border-b mt-8'>500GB Storage</p>
                    <p className='py-2 mx-8 border-b'>1 Granted user</p>
                    <p className='py-2 mx-8 border-b'>Send Upto 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Trial</button>
            </div>
            <div className='bg-gray-100 w-full shadow-xl text-center p-4 md: my-0 my-10 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt=''/>
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font'>
                    <p className='py-2 mx-8 border-b mt-8'>500GB Storage</p>
                    <p className='py-2 mx-8 border-b'>1 Granted user</p>
                    <p className='py-2 mx-8 border-b'>Send Upto 2GB</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl text-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Triple} alt=''/>
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font'>
                    <p className='py-2 mx-8 border-b mt-8'>500GB Storage</p>
                    <p className='py-2 mx-8 border-b'>1 Granted user</p>
                    <p className='py-2 mx-8 border-b'>Send Upto 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards