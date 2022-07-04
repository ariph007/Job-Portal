import React from 'react'
import Buttons from '../Buttons/Buttons'

const Navbar = () => {
    return (
            <div className='md:justify-between hidden md:flex flex-col md:flex-row text-center justify-center align-middle content-center'>
                <div className='logo mb-4 md:mb-0 flex justify-center'>
                    <p className='text-lg align-middle text-center text-sky-600 font-semibold'>JobFinder</p>
                </div>
                <div className='menu flex justify-center'>
                    <ul className='flex flex-col md:flex-row align-middle content-center'>
                        <li className='text-base font-medium md:mr-6'>Home</li>
                        <li className='text-base font-medium md:mr-6'>Jobs</li>
                        <li className='text-base font-medium md:mr-6'>Company</li>
                    </ul>
                </div>
                <div className='Actiontc flex flex-col md:flex-row'>
                    <Buttons type='login' />
                    <Buttons type='signup' />
                </div>
            </div>
    )
}

export default Navbar