import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className=" w-72 pt-8  h-screen mr-2 flex flex-col">
            <ul className='bg-gray-200 rounded-xl flex flex-col h-[100vh]  gap-4 font-bold text-2xl'>
                <Link to="/bg-changer" className='rounded-r-xl hover:shadow-lg duration-500  bg-white p-3 ' >BG Image changer</Link>
                <Link to="" className='rounded-r-xl hover:shadow-lg duration-500  bg-white p-3 '>Accordian</Link>
                <Link to="/signup" className='rounded-r-xl hover:shadow-lg duration-500  bg-white p-3 '>Sign up</Link>
                <Link to="testimonials" className='rounded-r-xl hover:shadow-lg duration-500  bg-white p-3 '>Testimonials</Link>
                <Link to="" className='rounded-r-xl hover:shadow-lg duration-500  bg-white p-3 '></Link>
                <Link to="" className='rounded-r-xl hover:shadow-lg duration-500  bg-white p-3 '></Link>
            </ul>
        </div>
    )
}

export default Sidebar