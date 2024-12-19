// import React from 'react'
// import tronix from '../assets/portfolio/tronix.png'
// import orebi from '../assets/portfolio/orebi.png'
// import exclusive from '../assets/portfolio/exclusive.png'
// import todo from '../assets/portfolio/todo.jpg'
// import chattingApp01 from '../assets/portfolio/chattingApp01.png'
// import chattingApp02 from '../assets/portfolio/chattingApp02.png'

// const Portfolio = () => {
//   return (
//     <div name="portfolio" className=' w-full text-gray-500 py-40 md:py-48'>
//         <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
//                 <p className='py-6'>Check Out Some of My Work Right Here</p>
//             </div>
//             <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-5'>
//                 <div className='shadow-md shadow-gray-600 rounded-lg'>
//                     <img src={tronix} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
//                     <div className='flex items-center justify-center'>
//                         <a target='_blank' rel='noreferrer' href='https://tronix-ecommerce-seven.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
//                         <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/Tronix-ecommerce' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
//                     </div>
//                 </div>


//                 <div className='shadow-md shadow-gray-600 rounded-lg'>
//                     <img src={exclusive} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
//                     <div className='flex items-center justify-center'>
//                         <a target='_blank' rel='noreferrer' href='https://ecommerce-exclusive-project-irmq.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
//                         <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/ecommerce-exclusive-project' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
//                     </div>
//                 </div>


//                 <div className='shadow-md shadow-gray-600 rounded-lg'>
//                     <img src={todo} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
//                     <div className='flex items-center justify-center'>
//                         <a  className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
//                         <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/Todo-with-react' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
//                     </div>
//                 </div>


//                 <div className='shadow-md shadow-gray-600 rounded-lg'>
//                     <img src={chattingApp01} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
//                     <div className='flex items-center justify-center'>
//                         <a target='_blank' rel='noreferrer' href='https://chatting-app-beta.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
//                         <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/chatting-app' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
//                     </div>
//                 </div>


//                 <div className='shadow-md shadow-gray-600 rounded-lg'>
//                     <img src={orebi} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
//                     <div className='flex items-center justify-center'>
//                         <a target='_blank' rel='noreferrer' href='https://ecommerce-project-lmhw.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
//                         <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/ecommerce-project' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
//                     </div>
//                 </div>


//                 <div className='shadow-md shadow-gray-600 rounded-lg'>
//                     <img src={chattingApp02} alt="" className='rounded-t-md hover:rounded-md hover:scale-105 duration-200 w-full h-[80%] object-cover'/>
//                     <div className='flex items-center justify-center'>
//                         <a target='_blank' rel='noreferrer' href='https://chat-app-2-ten.vercel.app/' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer'>Demo</a>
//                         <a target='_blank' rel='noreferrer' href='https://github.com/Abrar-Rahi/chat_app_2' className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</a>
//                     </div>
//                 </div>



   
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Portfolio




import React from 'react';
import tronix from '../assets/portfolio/tronix.png';
import orebi from '../assets/portfolio/orebi.png';
import exclusive from '../assets/portfolio/exclusive.png';
import todo from '../assets/portfolio/todo.jpg';
import chattingApp01 from '../assets/portfolio/chattingApp01.png';
import chattingApp02 from '../assets/portfolio/chattingApp02.png';

const Portfolio = () => {
  const projects = [
    {
      image: tronix,
      demo: "https://tronix-ecommerce-seven.vercel.app/",
      code: "https://github.com/Abrar-Rahi/Tronix-ecommerce",
    },
    {
      image: exclusive,
      demo: "https://ecommerce-exclusive-project-irmq.vercel.app/",
      code: "https://github.com/Abrar-Rahi/ecommerce-exclusive-project",
    },
    {
      image: todo,
      demo: "#", // Replace with the actual demo link if available
      code: "https://github.com/Abrar-Rahi/Todo-with-react",
    },
    {
      image: chattingApp01,
      demo: "https://chatting-app-beta.vercel.app/",
      code: "https://github.com/Abrar-Rahi/chatting-app",
    },
    {
      image: orebi,
      demo: "https://ecommerce-project-lmhw.vercel.app/",
      code: "https://github.com/Abrar-Rahi/ecommerce-project",
    },
    {
      image: chattingApp02,
      demo: "https://chat-app-2-ten.vercel.app/",
      code: "https://github.com/Abrar-Rahi/chat_app_2",
    },
  ];

  return (
    <div
      name="portfolio"
      className="relative w-full py-40 md:py-48 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 overflow-hidden z-40"
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

      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold text-gray-700 dark:text-gray-200 inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-600 dark:text-gray-300">
            Check Out Some of My Work Right Here
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="shadow-md shadow-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 dark:hover:shadow-cyan-400/50 transition-transform duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="rounded-t-md hover:rounded-md duration-300 w-full h-[80%] object-cover"
              />
              <div className="flex  items-center justify-center mt-auto m-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.demo}
                  className="w-1/2 px-6 py-3 m-2 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md hover:from-blue-400 hover:to-cyan-400 hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.code}
                  className="w-1/2 px-6 py-3 m-2 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md hover:from-blue-400 hover:to-cyan-400 hover:scale-110 transition-transform duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

