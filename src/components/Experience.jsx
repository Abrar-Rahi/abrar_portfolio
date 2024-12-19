// import React from 'react'
// import html from '../assets/logo/html.png'
// import css from '../assets/logo/css.png'
// import express from '../assets/logo/express.png'
// import firebase from '../assets/logo/firebase.png'
// import github from '../assets/logo/github.png'
// import javaScript from '../assets/logo/javaScript.png'
// import mongodb from '../assets/logo/mongodb.png'
// import node from '../assets/logo/node.png'
// import reactImage from '../assets/logo/react.png'
// const Experience = () => {
//   return (
//     <div name="experience" className='w-full   py-40 md:py-48 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900'>
//         <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center  h-full text-gray-500'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
//                 <p className='py-6'>these are the technologies I've worked with</p>
//             </div>

//             <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-6 w-full text-center sm:px-5'>

//                 <div className='shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'>
//                     <img src={html} alt="" className='w-20 mx-auto'/>
//                     <p className='mt-4'>HTML</p>
//                 </div>

//                 <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
//                     <img src={css} alt="" className='w-20 mx-auto'/>
//                     <p className='mt-4'>CSS</p>
//                 </div>

//                 <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
//                     <img src={javaScript} alt="" className='w-20 mx-auto'/>
//                     <p className='mt-4'>JavaScript</p>
//                 </div>

//                 <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
//                     <img src={reactImage} alt="" className='w-20 mx-auto'/>
//                     <p className='mt-4'>React</p>
//                 </div>

//                 <div className='shadow-md shadow-green-500 hover:scale-105 duration-500 py-2 rounded-lg'>
//                     <img src={node} alt="" className='w-20 mx-auto'/>
//                     <p className='mt-4'>Node js</p>
//                 </div>

//                 <div className='shadow-md shadow-gray-600 hover:scale-105 duration-500 py-2 rounded-lg'>
//                     <img src={express} alt="" className='w-20 mx-auto'/>
//                     <p className='mt-4'>Express js</p>
//                 </div>

//                 <div className='shadow-md shadow-green-400 hover:scale-105 duration-500 py-2 rounded-lg'>
//                     <img src={mongodb} alt="" className='w-20 mx-auto'/>
//                     <p className='mt-4'>Mongo DB</p>
//                 </div>

//                 <div className='shadow-md shadow-gray-400 hover:scale-105 duration-500 py-2 rounded-lg'>
//                     <img src={github} alt="" className='w-20 mx-auto'/>
//                     <p className='mt-4'>GitHub</p>
//                 </div>

//                 <div className='shadow-md shadow-yellow-400 hover:scale-105 duration-500 py-2 rounded-lg'>
//                     <img src={firebase} alt="" className='w-20 mx-auto'/>
//                     <p className='mt-4'>Firebase</p>
//                 </div>

//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default Experience


import React from 'react';
import html from '../assets/logo/html.png';
import css from '../assets/logo/css.png';
import express from '../assets/logo/express.png';
import firebase from '../assets/logo/firebase.png';
import github from '../assets/logo/github.png';
import javaScript from '../assets/logo/javaScript.png';
import mongodb from '../assets/logo/mongodb.png';
import node from '../assets/logo/node.png';
import reactImage from '../assets/logo/react.png';

const Experience = () => {
  return (
    <div
      name="experience"
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

      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center h-full text-gray-700 dark:text-gray-300">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8  py-6 w-full text-center sm:px-5">
          {[
            { img: html, name: "HTML", color: "shadow-orange-500" },
            { img: css, name: "CSS", color: "shadow-blue-500" },
            { img: javaScript, name: "JavaScript", color: "shadow-yellow-500" },
            { img: reactImage, name: "React", color: "shadow-blue-500" },
            { img: node, name: "Node.js", color: "shadow-green-500" },
            { img: express, name: "Express.js", color: "shadow-gray-600" },
            { img: mongodb, name: "MongoDB", color: "shadow-green-400" },
            { img: github, name: "GitHub", color: "shadow-gray-400" },
            { img: firebase, name: "Firebase", color: "shadow-yellow-400" },
          ].map((tech, index) => (
            <div
              key={index}
              className={`relative shadow-md ${tech.color} hover:scale-105 duration-500 py-2 rounded-lg group overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 group-hover:opacity-100 animate-color-run"></div>
              <img
                src={tech.img}
                alt={`${tech.name} Logo`}
                className="w-20 mx-auto group-hover:animate-spin-slow relative z-10"
              />
              <p className="mt-4 relative z-10">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience