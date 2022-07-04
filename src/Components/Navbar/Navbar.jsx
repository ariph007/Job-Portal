import React from 'react'
import Buttons from '../Buttons/Buttons'

const Navbar = () => {
    return (
            <div className='md:justify-between hidden md:flex flex-col md:flex-row text-center justify-center align-middle content-center'>
                <div className='logo mb-4 md:mb-0 flex justify-center content-center items-center'>
                    <p className='text-lg align-middle text-center text-sky-600 font-semibold'>JobFinder</p>
                <div className='menu flex justify-center ml-4'>
                    <ul className='flex flex-col md:flex-row align-middle content-center items-center'>
                        <li className='text-base font-medium md:mr-6'>Home</li>
                        <li className='text-base font-medium md:mr-6'>Jobs</li>
                        <li className='text-base font-medium md:mr-6'>Company</li>
                    </ul>
                </div>
                </div>
                <div className='Actiontc flex flex-col md:flex-row'>
                    <Buttons type='login' text='Login' />
                    <Buttons type='signup' text='Sign Up' />
                </div>
            </div>
    )
}

export default Navbar