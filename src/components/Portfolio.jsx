import React from 'react'
import tronix from '../assets/portfolio/tronix.png'
import orebi from '../assets/portfolio/orebi.png'
import exclusive from '../assets/portfolio/exclusive.png'
import todo from '../assets/portfolio/todo.jpg'
import chattingApp01 from '../assets/portfolio/chattingApp01.png'
import chattingApp02 from '../assets/portfolio/chattingApp02.png'

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen p-4'>
        <div className='max-w-screen-lg p4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check Out Some of My Work Right Here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-5'>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={tronix} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
                    <div className='flex items-center justify-center'>
                        <a target='_blank' rel='noreferrer' href='https://tronix-ecommerce-seven.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/Tronix-ecommerce' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
                    </div>
                </div>


                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={exclusive} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
                    <div className='flex items-center justify-center'>
                        <a target='_blank' rel='noreferrer' href='https://ecommerce-exclusive-project-irmq.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/ecommerce-exclusive-project' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
                    </div>
                </div>


                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={todo} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
                    <div className='flex items-center justify-center'>
                        <a  className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/Todo-with-react' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
                    </div>
                </div>


                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={chattingApp01} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
                    <div className='flex items-center justify-center'>
                        <a target='_blank' rel='noreferrer' href='https://chatting-app-beta.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/chatting-app' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
                    </div>
                </div>


                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={orebi} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
                    <div className='flex items-center justify-center'>
                        <a target='_blank' rel='noreferrer' href='https://ecommerce-project-lmhw.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/ecommerce-project' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
                    </div>
                </div>


                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={chattingApp02} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
                    <div className='flex items-center justify-center'>
                        <a target='_blank' rel='noreferrer' href='https://chat-app-2-ten.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/chat_app_2' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
                    </div>
                </div>



   
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio