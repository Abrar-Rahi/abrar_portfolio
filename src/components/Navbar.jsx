import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

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
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-b to-black from-gray-800 fixed font-bold '>
      <Link to="home" smooth duration={500}>
         <h1 className='md:text-5xl text-3xl ml-2 font-sign font-bold cursor-pointer'>ABRAR</h1>
      </Link>

      <div>
        <ul className='hidden md:flex'>
          {link.map((item, index) => (
            <li key={index} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 text-roboto'>
              <Link to={item.links} smooth duration={500}>{item.links}</Link>
            </li>

          ))}
        </ul>

        <div className='md:hidden pr-4  text-gray-500 z-10'>

          <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            {nav ? <FaTimes size={30} /> : <FiMenu size={30} />}
          </div>
        {nav &&
          <ul className='flex flex-col justify-center items-center absolute top-16 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {link.map((item, index) => (
              <li key={index} className='px-4 my-6 cursor-pointer capitalize font-medium text-gray-500  text-roboto text-5xl '>
                <Link onClick={()=> setNav(!nav)} to={item.links} smooth duration={500}>{item.links}</Link>
              </li>

            ))}
          </ul>
        }
        </div>

      </div>
    </div>



  )
}

export default Navbar