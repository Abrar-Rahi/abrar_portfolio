// import React from 'react'
// import { FaLongArrowAltRight } from "react-icons/fa";
// import heroimg from '../assets/abrar.png'
// import { Link } from 'react-scroll';

// const Home = () => {
//   return (
//     <div name="home" className=' w-full  py-32 md:pb-48 md:pt-60'>
//         <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-x-10'>
//             <div className='flex flex-col justify-center h-full mt-12 md:mt-0'>
//                 <h2 className='text-gray-500 font-semibold  max-w-xl text-2xl md:text-5xl md:leading-tight'>HI I'M ABRAR. I AM A FULL-STACK DEVELOPER</h2>
//                 <p className=' max-w-md text-gray-500 py-4'>As a full-stack developer, I bring a strong foundation in HTML, CSS, and JavaScript, coupled with deep expertise in React.js, Node.js, Express.js and MongoDB</p>
//                 <div>
//                     <Link to='portfolio' smooth duration={500} className='group text-gray-200 py-3 px-6 w-fit flex items-center gap-x-2 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 duration-300'>
//                         Portfolio
//                         <span className='group-hover:rotate-90 duration-300'><FaLongArrowAltRight size={20} /></span> 
//                     </Link>
//                 </div>
//             </div>
//             <div>
//               <img src={heroimg} alt="my img" className='w-[300px] h-[420px] object-cover rounded-lg mt-10 md:mt-0'/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home

import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import heroimg from "../assets/abrar.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="relative w-full py-32 md:pb-48 md:pt-60 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 overflow-hidden z-40"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Shapes */}
        <div className="animate-shape bg-cyan-500 opacity-50 w-10 h-10 rounded-full absolute top-10 left-10"></div>
        <div className="animate-shape bg-blue-500 opacity-50 w-14 h-14 rounded-full absolute top-1/4 left-1/2"></div>
        <div className="animate-shape bg-cyan-400 opacity-50 w-8 h-8 rounded-full absolute top-3/4 left-1/4"></div>
        <div className="animate-shape bg-blue-400 opacity-50 w-12 h-12 rounded-full absolute bottom-10 right-10"></div>
        <div className="animate-shape bg-cyan-600 opacity-40 w-16 h-16 rounded-full absolute top-1/3 right-1/3"></div>
        <div className="animate-shape bg-blue-300 opacity-60 w-6 h-6 rounded-full absolute bottom-20 left-1/3"></div>
        <div className="animate-shape bg-cyan-300 opacity-70 w-20 h-20 rounded-full absolute top-1/6 right-1/4"></div>
        <div className="animate-shape bg-blue-600 opacity-50 w-10 h-10 rounded-full absolute bottom-1/4 left-1/6"></div>
        <div className="animate-shape bg-cyan-500 opacity-50 w-12 h-12 rounded-full absolute top-10 right-40"></div>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-x-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full mt-12 md:mt-0">
          <h2 className="text-gray-700 dark:text-gray-200 font-extrabold max-w-xl text-2xl md:text-5xl md:leading-tight hover:scale-105 transition-transform duration-300">
            HI, I'M ABRAR. I AM A FULL-STACK DEVELOPER
          </h2>
          <p className="max-w-md text-gray-600 dark:text-gray-300 py-4 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
            As a full-stack developer, I bring a strong foundation in HTML, CSS, and JavaScript, coupled with deep expertise in React.js, Node.js, Express.js, and MongoDB.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-gray-100 py-3 px-6 w-fit flex items-center gap-x-2 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:from-blue-400 hover:to-cyan-500 shadow-lg transition-all duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaLongArrowAltRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={heroimg}
            alt="Abrar"
            className="w-[300px] h-[420px] object-cover rounded-lg mt-10 md:mt-0 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

