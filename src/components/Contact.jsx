// import React from 'react'

// const Contact = () => {
//   return (
//     <div name="contact" className='w-full  text-gray-500  py-40 md:py-48'>
//         <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center h-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
//                 <p className='py-6'>Submit the form below to get in touct with me. </p>
//             </div>
//             <div className='flex justify-center items-center'>
//                 <form action="https://getform.io/f/Pe9qJ3eL" method="POST" className='flex flex-col gap-4 w-full md:w-1/2'>
//                     <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-gray-500 '/>

//                     <input type="text" name="email" placeholder='Enter Your Email' className='p-2 bg-transparent border-2 rounded-md text-gray-500 '/>

//                     <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-gray-500 ' placeholder='Enter Your Message'></textarea>

//                     <button className='text-gray-500 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Contact



import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
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
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/Pe9qJ3eL"
            method="POST"
            className="flex flex-col gap-4 w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 border-gray-400 rounded-md text-gray-500 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none duration-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 bg-transparent border-2 border-gray-400 rounded-md text-gray-500 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none duration-300"
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message"
              className="p-2 resize-none bg-transparent border-2 border-gray-400 rounded-md text-gray-500 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none duration-300"
            ></textarea>

            <button className="text-gray-700 dark:text-gray-300 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
