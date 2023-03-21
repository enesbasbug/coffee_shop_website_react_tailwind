import React from 'react';
import background_pic from './assets/coffee_images/bg.jpg';
import {Link} from 'react-scroll';


const Home = () => {

    return (
        <div name="home" className='relative'>
            <div className= 'h-screen w-full flex flex-col justify-center bg-cover bg-center relative'>
                
            <img src={background_pic} alt="background" className='object-cover h-screen w-screen'/>   
                
            <div className="absolute top-5 w-full bg-gray-900 flex ">
               <div className='lg:w-1/2'></div>
               <div className='lg:w-1/2 w-screen'>
                <ul className='flex justify-evenly'>
                        
                        <li className='text-zinc-200 lg:text-4xl text-3xl font-bold'>
                            <Link to="about" smooth duration={500}> About </Link>
                        </li>
                        <li className='text-zinc-200 lg:text-4xl text-3xl font-bold'>
                            <Link to="menu" smooth duration={500}> Menu </Link>
                        </li>
                        <li className='text-zinc-200 lg:text-4xl text-3xl  font-bold'>
                            <Link to="contact" smooth duration={500}> Contact </Link>
                        </li>
                    </ul>
               </div>
                
            </div>

            <div className="absolute bottom-0 w-full h-1/3 text-center opacity-80 bg-gray-800 p-12">
                <h1 className='text-white text-6xl font-bold'>a Coffe Shop in the UK</h1>
                <h2 className='text-white text-3xl font-light pb-4 pt-2 lg:pb-0'>We craft speciality coffee by small batch roasting for the freshest brew.</h2>
            </div>
                
            </div>
        </div>
        
  
  )
}

export default Home