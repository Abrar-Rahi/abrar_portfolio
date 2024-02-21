import React from 'react'
import html from '../assets/logo/html.png'
import css from '../assets/logo/css.png'
import express from '../assets/logo/express.png'
import firebase from '../assets/logo/firebase.png'
import github from '../assets/logo/github.png'
import javaScript from '../assets/logo/javaScript.png'
import mongodb from '../assets/logo/mongodb.png'
import node from '../assets/logo/node.png'
import reactImage from '../assets/logo/react.png'
const Experience = () => {
  return (
    <div name="experience" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black  pt-40 '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  h-full text-white'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>these are the technologies I've worked with</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-6 w-full text-center sm:px-5'>

                <div className='shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={html} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={css} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={javaScript} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={reactImage} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>React</p>
                </div>

                <div className='shadow-md shadow-green-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={node} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>Node js</p>
                </div>

                <div className='shadow-md shadow-gray-600 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={express} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>Express js</p>
                </div>

                <div className='shadow-md shadow-green-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={mongodb} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>Mongo DB</p>
                </div>

                <div className='shadow-md shadow-gray-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={github} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>GitHub</p>
                </div>

                <div className='shadow-md shadow-yellow-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={firebase} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>Firebase</p>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Experience