import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full bg-gradient-to-b from-black to-gray-800 text-white  py-40 md:py-48'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touct with me. </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/Pe9qJ3eL" method="POST" className='flex flex-col gap-4 w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white '/>

                    <input type="text" name="email" placeholder='Enter Your Email' className='p-2 bg-transparent border-2 rounded-md text-white '/>

                    <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white ' placeholder='Enter Your Message'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact