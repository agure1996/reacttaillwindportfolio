import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-cyan-400 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-cyan-600 duration-500'>
    {props.children}
    </button>
  )
}

export default Button