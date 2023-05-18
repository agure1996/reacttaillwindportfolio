import React from 'react'
import Links from './Links'

const Navbar = () => {
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>

            <span className='text-3xl text-fuchsia-700 mr-1 pt-2 hover:text-orange-300 duration-500'>
            <a href="/"><ion-icon name="logo-ionic"></ion-icon></a>
            </span>
            Navbar
        </div>
        <ul className='md:flex md:items-center'>
           {Links.map((link)=> (
            <li key={link.name} className='md:ml-8 text-xl'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
           ))}
        </ul>
    </div>
    
    </div>
  )
}

export default Navbar