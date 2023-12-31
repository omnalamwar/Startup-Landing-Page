import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <p className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want Tips & Tricks to optimize your flow?</p>
                <p>Sign up to our newsletter to stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='w-full p-3 flex rounded-md' type='email' placeholder='Enter email'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ml-4'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>privacy policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter