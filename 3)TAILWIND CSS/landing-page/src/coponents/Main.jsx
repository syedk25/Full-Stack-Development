import React from 'react'
import Web from '../assets/Web.svg'
import frontend from '../assets/Frontend.svg'
import backend from '../assets/Backend.svg'

function Main() {
  return (
    <div className='container mx-auto flex text-center mt-12 p-2 flex-col md:flex-row sm:gap-12'>
        
        <div className='md:w-1/3 flex flex-col items-center'>
            <h1 className='text-2xl'>Frontend Developer</h1>
            <img className='h-40 w-40' src={frontend} alt="" />
            <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint illo omnis veniam numquam soluta impedit ipsum laboriosam voluptatem nemo!</p>
        </div>
        <div className='md:w-1/3 flex flex-col items-center'>
            <h1 className='text-2xl'>Backend Developer</h1>
            <img className='h-40 w-40 margin-auto' src={backend} alt="" />
            <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint illo omnis veniam numquam soluta impedit ipsum laboriosam voluptatem nemo!</p>
        </div>
    </div>
  )
}

export default Main