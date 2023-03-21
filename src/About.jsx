import React from 'react';
import about_us_1 from './assets/coffee_images/coffee.avif';
import about_us_2 from './assets/coffee_images/coffee_latte.webp';
import about_us_3 from './assets/coffee_images/coffee_4.jpeg';


const About = () => {
  return (
    <div name='about' className='lg:h-screen md:h-screen sm:h-screen bg-gradient-to-t from-gray-700 via-gray to-gray-500'>
        <div className='flex flex-center justify-center pt-5 flex-col md:flex-row sm:flex-row ' >
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg sm:shadow px-5 lg:mx-0 mx-12">
                <img className=" mt-5 rounded-3xl max-h-96 lg:max-h-full lg:pl-0 lg:mx-0 mx-10 " src={about_us_1} alt=" in the mountains"/>
                <div className="m-10 mx-15 lg:mx-5 text-left">
                    <div className="text-white font-bold text-2xl mb-2">Compass joins leading Coffee Association</div>
                    <p className="text-zinc-300 text-base">
                    The UK’s largest food services provider, Compass Group UK & Ireland has become a member of the Speciality Coffee Association of Europe (SCAE), a trade association representing thousands of coffee enthusiasts and professionals from across Europe and Asia in over 90 countries.
                    </p>
                </div>
            </div>
            <div class="max-w-md rounded-2xl overflow-hidden shadow-lg sm:shadow px-5 lg:mx-0 mx-8">
                <img className=" mt-5 rounded-3xl max-h-96 lg:max-h-full  lg:pl-0 lg:mx-0 mx-10" src={about_us_2} alt="Sunset in the mountains"/>
                <div className="m-10 mx-15 lg:mx-5 pl-2 lg:pl-0 text-left">
                    <div className="text-white font-bold text-2xl mb-2">Launching Barista Academy of elite coffee experts</div>
                    <p className="text-zinc-300 text-base">
                    Compass the UK’s largest food and support services firm, is to launch its first Barista Academy – a group consisting of the most highly skilled baristas in the business.
                    </p>
                </div>
            </div>
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg sm:shadow px-5 lg:mx-0 mx-12">
                <img className=" mt-5 rounded-3xl max-h-96 lg:max-h-full  lg:pl-0 lg:mx-0 mx-10" src={about_us_3} alt=" the mountains"/>
                <div className="m-10 mx-15 lg:mx-5 text-left">
                    <div className="text-white font-bold text-2xl mb-2">Crosby Coffee to serve up special blend at this year’s Grand National</div>
                    <p className="text-zinc-300 text-base">
                    Micro artisan coffee roastery, Crosby Coffee, has teamed up with Jockey Club Catering creating a speciality blend for this year’s Crabbie’s Grand National at Aintree Racecourse, 7-9 April.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About