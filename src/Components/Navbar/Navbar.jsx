import React from 'react'
import Buttons from '../Buttons/Buttons'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return (
            <div className='md:justify-between hidden md:flex flex-col md:flex-row text-center justify-center align-middle content-center'>
                <div className='logo mb-4 md:mb-0 flex justify-center content-center items-center'>
                    <p className='text-lg align-middle text-center text-sky-600 font-semibold'>JobFinder</p>
                <div className='menu flex justify-center ml-4'>
                    <ul className='flex flex-col md:flex-row align-middle content-center items-center box-border'>
                        {props.active === 'home' ? <li className='hover:box-border text-base font-medium md:mr-6 text-blue-600 hover:border-b-blue-600 hover:border-b-2 hover:border-solid'> <Link to={'/'}>Home</Link></li> : <li className='hover:box-border hover:border-b-blue-600 hover:border-b-2 hover:border-solid text-base font-medium md:mr-6'> <Link to={'/'}>Home</Link></li>}
                        {props.active === 'job' ? <li className='hover:box-border hover:border-b-blue-600 hover:border-b-2 hover:border-solid text-base font-medium md:mr-6 text-blue-600'> <Link to={'/job'}>Job</Link></li> : <li className='hover:box-border hover:border-b-blue-600 hover:border-b-2 hover:border-solid text-base font-medium md:mr-6'> <Link to={'/job'}>Job</Link></li>}
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