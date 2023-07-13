import React, { useState } from 'react'
// import Links from './Links'
import { Link } from 'react-router-dom';

import Logo from '../img/aelmi2.png'


const Navbar = () => {

    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 opacity-75 z-10'>
            <div className='md:flex items-center  justify-between bg-black py-4 md:px-10 md:py-2 px-0 '>
                <div className='font-bold text-2xl cursor-pointer
                        flex items-center font-sans  text-white'>

                    <span className='text-3xl text-cyan-700 mr-1 pt-2 hover:text-orange-300 duration-500 '>
                        <a href="/"><img className='object-scale-down h-20 w-36 ' src={Logo} alt="logo" /></a>
                    </span>
                    
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-10 top-10 cursor-pointer md:hidden text-white'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pt-0 pb-0 absolute md:static bg-black text-white md:z-auto z-[-1] left-0 w-full 
                        md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? ' ' : 'top-[-490px] opacity-0 '} md:opacity-100`}>
                   
                    <li className='md:ml-8  text-xl md:my-0 my-7 '><Link to="/about" className=' text-opacity-100 text-white hover:text-gray-400 duration-500'>About Us</Link></li>
                    <li className='md:ml-8  text-xl md:my-0 my-7 '><Link to="/contact" className=' text-opacity-100 text-white hover:text-gray-400 duration-500' >Contact Us</Link></li>
                    <li className='md:ml-8  text-xl md:my-0 my-7 '><Link to="/learning" className=' text-opacity-100 text-white hover:text-gray-400 duration-500'>Learning</Link></li>
                    <li className='md:ml-8  text-xl md:my-0 my-7 '><Link to="/news" className=' text-opacity-100 text-white hover:text-gray-400 duration-500'>News</Link></li>
                    <li className='md:ml-8  text-xl md:my-0 my-7 '><Link to="/portfolio" className=' text-opacity-100 text-white hover:text-gray-400 duration-500'>Portfolio</Link></li>
                     </ul>
            </div>
        </div>
    )
}



    


export default Navbar

