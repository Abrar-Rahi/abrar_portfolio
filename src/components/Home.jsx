import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import heroimg from '../assets/abrar.png'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className=' w-full bg-gradient-to-b from-black via-black to-gray-800 py-32 md:pb-48 md:pt-60'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-x-10'>
            <div className='flex flex-col justify-center h-full mt-12 md:mt-0'>
                <h2 className='text-white font-semibold  max-w-xl text-2xl md:text-5xl md:leading-tight'>HI I'M ABRAR. I AM A FULL-STACK DEVELOPER</h2>
                <p className=' max-w-md text-gray-500 py-4'>As a full-stack developer, I bring a strong foundation in HTML, CSS, and JavaScript, coupled with deep expertise in React.js, Node.js, Express.js and MongoDB</p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white py-3 px-6 w-fit flex items-center gap-x-2 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 duration-300'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'><FaLongArrowAltRight size={20} /></span> 
                    </Link>
                </div>
            </div>
            <div>
              <img src={heroimg} alt="my img" className='w-[300px] h-[420px] object-cover rounded-lg mt-10 md:mt-0'/>
            </div>
        </div>
    </div>
  )
}

export default Home