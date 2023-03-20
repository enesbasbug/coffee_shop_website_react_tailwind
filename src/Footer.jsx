import React from 'react'
import {Link} from 'react-scroll';

const Footer = () => {
  return (

        <footer class=" w-full bg-white shadow dark:bg-gray-800">
            <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"> © 2023 <a href="https://enesbasbug.com/" class="hover:underline">EnesBasbug™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="home" smooth duration={500} className="mr-4 hover:underline md:mr-6 " > Home </Link>
                </li>
                <li>
                    <Link to="about" smooth duration={500} className="mr-4 hover:underline md:mr-6 " > About </Link>
                </li>
                <li>
                    <Link to="menu" smooth duration={500} className="mr-4 hover:underline md:mr-6 " > Menu </Link>
                </li>
                <li>
                    <Link to="contact" smooth duration={500} className="mr-4 hover:underline md:mr-6 " > Contact </Link>
                </li>
            </ul>
            </div>
        </footer>
  )
}

export default Footer