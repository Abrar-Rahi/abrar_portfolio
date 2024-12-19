// import React from 'react'

// const About = () => {
//   return (
//     <div name="about" className='w-full text-gray-500  py-32 md:py-48 lg:py-52'>
//         <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full '>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
//             </div>
//             <p className='text-xl mt-10 mb-4'>As a MERN stack developer, I am specialize in building dynamic and interactive web applications using a combination of MongoDB, Express.js, React.js, and Node.js.<span className='hidden md:inline'>Here's a breakdown of my role and responsibilities</span> </p>

//             <div className=' flex-col gap-3 hidden md:flex'>

//             <p className='text-xl'>
//               <span className='font-bold'> 1.Database Management (MongoDB):</span> I am responsible for designing and implementing the database schema using MongoDB, a NoSQL database. This involves creating collections, defining document structures, and optimizing queries for performance.</p>

//             <p className='text-xl'>
//               <span className='font-bold'> 2.Server-Side Development (Node.js and Express.js):</span> I develop the server-side logic and APIs using Node.js, a JavaScript runtime, and Express.js, a web application framework. This includes handling HTTP requests, routing, authentication, and integrating with the database.</p>

//             <p className='text-xl'>
//               <span className='font-bold'> 3.Client-Side Development (React.js):</span> I build the user interface and client-side logic using React.js, a JavaScript library for building UI components. This involves creating reusable UI elements, managing application state, and handling user interactions.</p>

//             <p className='text-xl'>
//               <span className='font-bold'> 4.Full-Stack Development:</span> I work on both the front-end and back-end of web applications, integrating the client-side and server-side components to create seamless user experiences. This requires a solid understanding of both front-end and back-end technologies and the ability to collaborate with designers and other developers.</p>

//             <p className='text-xl'>
//               <span className='font-bold'> 5.Continuous Learning and Improvement:</span> I stay up-to-date with the latest technologies and best practices in web development, continuously learning and improving my skills. This may involve attending workshops, reading documentation, or participating in online communities.</p>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default About



import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="relative w-full py-32 md:py-48 lg:py-52 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 overflow-hidden z-40"
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
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-gray-700 dark:text-gray-200 font-extrabold text-2xl md:text-5xl md:leading-tight hover:scale-105 transition-transform duration-300">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 py-4 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300 max-w-xl mt-8 text-lg">
            I am a passionate{" "}
            <span className="font-bold text-cyan-600 dark:text-cyan-400">
              MERN stack developer
            </span>{" "}
            with expertise in building dynamic, scalable web applications. My
            focus is on delivering seamless user experiences and robust back-end
            solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 py-4 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300 max-w-xl text-lg">
            From creating intuitive user interfaces with React.js to developing
            powerful APIs with Node.js and Express.js, I specialize in full-stack
            integration that bridges front-end and back-end technologies.
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col gap-y-6 mt-12 md:mt-0 max-w-xl">
          {/* Skill Card 1 */}
          <div className="p-4 bg-gradient-to-r from-cyan-300 dark:from-cyan-500 via-cyan-400 dark:via-cyan-600 to-cyan-500 dark:to-cyan-700 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-runGradient">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              1. Database Management
            </h3>
            <p className="mt-2 text-gray-900 dark:text-gray-100">
              Designing efficient database schemas with MongoDB to ensure
              optimized queries and a solid data structure for dynamic
              applications.
            </p>
          </div>
          {/* Skill Card 2 */}
          <div className="p-4 bg-gradient-to-r from-cyan-300 dark:from-cyan-500 via-cyan-400 dark:via-cyan-600 to-cyan-500 dark:to-cyan-700 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-runGradient">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              2. Server-Side Development
            </h3>
            <p className="mt-2 text-gray-900 dark:text-gray-100">
              Developing APIs and back-end logic using Node.js and Express.js to
              handle data flow, authentication, and real-time server operations.
            </p>
          </div>
          {/* Skill Card 3 */}
          <div className="p-4 bg-gradient-to-r from-cyan-300 dark:from-cyan-500 via-cyan-400 dark:via-cyan-600 to-cyan-500 dark:to-cyan-700 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-runGradient">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              3. Client-Side Development
            </h3>
            <p className="mt-2 text-gray-900 dark:text-gray-100">
              Building interactive user interfaces with React.js, ensuring a
              dynamic and engaging front-end experience for users.
            </p>
          </div>
          {/* Skill Card 4 */}
          <div className="p-4 bg-gradient-to-r from-cyan-300 dark:from-cyan-500 via-cyan-400 dark:via-cyan-600 to-cyan-500 dark:to-cyan-700 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-runGradient">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              4. Full-Stack Integration
            </h3>
            <p className="mt-2 text-gray-900 dark:text-gray-100">
              Bridging the gap between front-end and back-end technologies to
              deliver seamless and cohesive web solutions.
            </p>
          </div>
          {/* Skill Card 5 */}
          <div className="p-4 bg-gradient-to-r from-cyan-300 dark:from-cyan-500 via-cyan-400 dark:via-cyan-600 to-cyan-500 dark:to-cyan-700 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-runGradient">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              5. Continuous Improvement
            </h3>
            <p className="mt-2 text-gray-900 dark:text-gray-100">
              Staying updated with the latest trends and technologies to refine
              my skills and deliver cutting-edge applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;





