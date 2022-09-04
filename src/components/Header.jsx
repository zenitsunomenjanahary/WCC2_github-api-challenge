import React from 'react'
import {FaCode, FaGithub } from "react-icons/fa"

const Header = () => {
  return (
    <div className='sticky'>
    <div className=' p-3 w-full bg-indigo-700 flex flex-col sm:flex-row justify-around items-center'>
        <div className='flex items-center space-x-2'>
            <div className='bg-slate-900 rounded p-1 text-white'>
                <FaCode size={22}/>
            </div>
            <h1 className='text-xl font-medium'>AITI</h1>
        </div>
        <div className='flex items-center space-x-2'>
            <h1 className='text-xl '>Github Search</h1>
            <div className='bg-slate-900 rounded p-1 text-white'>
                <FaGithub size={22}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
