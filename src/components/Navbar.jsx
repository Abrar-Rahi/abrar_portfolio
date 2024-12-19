// import React, { useEffect, useState } from 'react'
// import { FiMenu } from "react-icons/fi";
// import { FaTimes } from "react-icons/fa";
// import { Link } from 'react-scroll';
// import DarkMood from './DarkMood';

// const Navbar = () => {
  
//   let [nav, setNav] = useState(false)
//   let link = [
//     { links: "home" },
//     { links: "about" },
//     { links: "portfolio" },
//     { links: "experience" },
//     { links: "contact" },

//   ]

  
//   return (
//     <div className='flex text-gray-500 bg-gray-300 justify-between items-center w-full h-20 px-4  fixed font-bold'>
//       <Link to="home" smooth duration={500}>
//          <h1 className='md:text-5xl text-3xl ml-2 font-sign font-bold cursor-pointer'>ABRAR</h1>
//       </Link>
       
//       <div className='flex items-center gap-2'>
//         <DarkMood/>

//       <div>
//         <ul className='hidden md:flex'>
//           {link.map((item, index) => (
//             <li key={index} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 text-roboto'>
//               <Link to={item.links} smooth duration={500}>{item.links}</Link>
//             </li>

//           ))}
//         </ul>
        
//         <div className='md:hidden pr-4  text-gray-500 z-10'>

//           <div onClick={() => setNav(!nav)} className='cursor-pointer'>
//             {nav ? <FaTimes size={30} /> : <FiMenu size={30} />}
//           </div>
//         {nav &&
//           <ul className='flex flex-col justify-center items-center absolute top-16 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
//             {link.map((item, index) => (
//               <li key={index} className='px-4 my-6 cursor-pointer capitalize font-medium text-gray-500  text-roboto text-5xl '>
//                 <Link onClick={()=> setNav(!nav)} to={item.links} smooth duration={500}>{item.links}</Link>
//               </li>

//             ))}
//           </ul>
//         }
//         </div>
        

//       </div>
//         </div> 

//     </div>



//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import DarkMood from './DarkMood';

const Navbar = () => {
  let [nav, setNav] = useState(false);
  let link = [
    { links: "home" },
    { links: "about" },
    { links: "portfolio" },
    { links: "experience" },
    { links: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed font-bold text-gray-700 bg-gradient-to-r from-gray-100 to-gray-300 shadow-md z-50">
      {/* Logo */}
      <Link to="home" smooth duration={500}>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-xl px-4 py-1 rounded-full shadow-md">
            AB
          </div>
          <h1 className="font-extrabold text-xl md:text-3xl text-gray-800 tracking-wider">
            ABRAR
          </h1>
        </div>
      </Link>

      {/* Links and DarkMode */}
      <div className="flex items-center gap-x-2">
        {/* Dark Mood Button */}
        <div className=" group flex items-center justify-center">
          <button className="">
            <DarkMood />
          </button>
          
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="hidden md:flex">
            {link.map((item, index) => (
              <li
                key={index}
                className="px-4 cursor-pointer capitalize font-medium text-gray-700 hover:scale-105 hover:text-cyan-600 duration-300"
              >
                <Link to={item.links} smooth duration={500}>
                  {item.links}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden pr-4 text-gray-700 z-10">
            <div onClick={() => setNav(!nav)} className="cursor-pointer">
              {nav ? <FaTimes size={30} /> : <FiMenu size={30} />}
            </div>
            {nav && (
              <ul className="flex flex-col justify-center items-center absolute top-16 left-0 w-full h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-700">
                {link.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 my-6 cursor-pointer capitalize font-medium text-gray-700 text-5xl hover:scale-110 hover:text-cyan-600 duration-300"
                  >
                    <Link
                      onClick={() => setNav(!nav)}
                      to={item.links}
                      smooth
                      duration={500}
                    >
                      {item.links}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
