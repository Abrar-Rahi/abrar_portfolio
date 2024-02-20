import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  let [nav, setNav] = useState(false)
  let link = [
    { links: "home" },
    { links: "about" },
    { links: "portfolio" },
    { links: "experience" },
    { links: "contact" },

  ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed font-bold '>
      <h1 className='md:text-5xl text-2xl ml-2 font-sat'>ABRAR</h1>

      <div>
        <ul className='hidden md:flex'>
          {link.map((item, index) => (
            <li key={index} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 text-roboto'>{item.links}</li>

          ))}
        </ul>

        <div className='md:hidden pr-4  text-gray-500 z-10'>

          <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            {nav ? <FaTimes size={30} /> : <FiMenu size={30} />}
          </div>
        {nav &&
          <ul className='flex flex-col justify-center items-center absolute top-16 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {link.map((item, index) => (
              <li key={index} className='px-4 my-6 cursor-pointer capitalize font-medium text-gray-500  text-roboto text-5xl '>{item.links}</li>

            ))}
          </ul>
        }
        </div>

      </div>
    </div>



  )
}

export default Navbar