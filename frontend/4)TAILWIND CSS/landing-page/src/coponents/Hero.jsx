import React from 'react'
import heroImg from '../assets/hero.png'

function Hero() {
  return (
     <div className='container  mx-auto mt-12 flex flex-col md:flex-row'>
        <div className='md:w-1/2 text-center'>
            <p className='mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quod voluptates cumque, in quibusdam distinctio nostrum voluptas. Nisi, magni voluptate!</p>
            <button className='font-medium text-white bg-indigo-500 rounded-full py-2 px-6 mt-6' >Get Started</button>
        </div>
        <div className='md:w-1/2'>
            <img className='mx-auto' src={heroImg} alt="Designing Image" />
        </div>
     </div>
  )
}

export default Hero
