import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full text-white bg-gradient-to-b from-gray-800 to-black py-32 md:py-48 lg:py-52'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10 mb-4'>As a MERN stack developer, I am specialize in building dynamic and interactive web applications using a combination of MongoDB, Express.js, React.js, and Node.js.<span className='hidden md:inline'>Here's a breakdown of my role and responsibilities</span> </p>
            
            <div className=' flex-col gap-3 hidden md:flex'>

            <p className='text-xl'>
              <span className='font-bold'> 1.Database Management (MongoDB):</span> I am responsible for designing and implementing the database schema using MongoDB, a NoSQL database. This involves creating collections, defining document structures, and optimizing queries for performance.</p>

            <p className='text-xl'>
              <span className='font-bold'> 2.Server-Side Development (Node.js and Express.js):</span> I develop the server-side logic and APIs using Node.js, a JavaScript runtime, and Express.js, a web application framework. This includes handling HTTP requests, routing, authentication, and integrating with the database.</p>

            <p className='text-xl'>
              <span className='font-bold'> 3.Client-Side Development (React.js):</span> I build the user interface and client-side logic using React.js, a JavaScript library for building UI components. This involves creating reusable UI elements, managing application state, and handling user interactions.</p>

            <p className='text-xl'>
              <span className='font-bold'> 4.Full-Stack Development:</span> I work on both the front-end and back-end of web applications, integrating the client-side and server-side components to create seamless user experiences. This requires a solid understanding of both front-end and back-end technologies and the ability to collaborate with designers and other developers.</p>

            <p className='text-xl'>
              <span className='font-bold'> 5.Continuous Learning and Improvement:</span> I stay up-to-date with the latest technologies and best practices in web development, continuously learning and improving my skills. This may involve attending workshops, reading documentation, or participating in online communities.</p>
            
            </div>
        </div>
    </div>
  )
}

export default About