import React from 'react'
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

const Sociallinks = () => {
  return (
    <div className='hidden lg:flex flex-col fixed top-[40%] left-2 xl:left-0 z-50'>
    
    <ul>
      <li className='flex justify-between items-center w-36 h-12 xl:w-40 xl:h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ease-in rounded-tr-md'>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/abrar-rahi-6a0176259/' className='flex items-center justify-between w-full text-white text-xl '>
          <>
          Linkedin <FaLinkedin size={30}/>
          </>
        </a>
      </li>

      <li className='flex justify-between items-center w-36 h-12 xl:w-40 xl:h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ease-in'>
        <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi' className='flex items-center justify-between w-full text-white text-xl '>
          <>
          Github <FaGithub size={30}/>
          </>
        </a>
      </li>

      <li className='flex justify-between items-center w-36 h-12 xl:w-40 xl:h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ease-in'>
        <a target='_blank' rel='noreferrer' href='mailto:rahiabrar177@gmail.com' className='flex items-center justify-between w-full text-white text-xl '>
          <>
          Gmail <HiOutlineMail size={30}/>
          </>
        </a>
      </li>
     
      <li className='flex justify-between items-center w-36 h-12 xl:w-40 xl:h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ease-in rounded-br-md'>
        <a target='_blank' rel='noreferrer' download={true} href='/abrar_resume.pdf' className='flex items-center justify-between w-full text-white text-xl '>
          <>
          Resume <BsFillPersonFill size={30}/>
          </>
        </a>
      </li>


    </ul>



      {/* <FaGithub />
      <FaLinkedin />
      <HiOutlineMail />
      <BsFillPersonFill /> */}
    </div>
  )
}

export default Sociallinks

