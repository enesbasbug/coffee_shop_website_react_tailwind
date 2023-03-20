import React from 'react'
import contact_pic from './assets/coffee_images/coffee_3.jpeg';

const Contact = () => {
  return (
    
    <div className='w-full lg:h-screen md:lg:h-screen sm:h-screen bg-gradient-to-b from-gray-700 via-gray to-gray-600'>
        <div name="contact" className="container px-6 mx-auto py-24 ">
            <div className="container mx-auto xl:px-32 lg:text-left">
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="mb-6 lg:mb-0 rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 backdrop-blur-sm bg-white/20">
                        <h2 className="text-3xl font-bold mb-6">We are here for you</h2>
                        <form action="https://getform.io/f/842510ed-dc65-4c26-9e56-0bd59a3469b0" method='POST' className='flex flex-col w-full md:w-1/2'>
                            <input type="text" name='name' placeholder='Enter your name.'  className='p-2 bg-transparent border-2 rounded-md text-gray-200 focus:outline-none'/>
                            <input type="text" name='email' placeholder='Enter your email.'  className='my-4 p-2 bg-transparent border-2 rounded-md text-gray-200 focus:outline-none'/>
                            
                            <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-gray-200 focus:outline-none' placeholder='Enter your message.'></textarea>

                            <button className='text-gray-100 bg-gradient-to-b from-gray-700 to-gray-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold'>Contact Us Directly</button>

                        </form>      
                    </div>

                    <div>
                        <img src={contact_pic} className="w-full rounded-lg shadow-lg"
                        alt="contact img, a latte" />
                    </div>
                </div>
            </div>
        </div>
    </div>

        
  )
}

export default Contact