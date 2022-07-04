import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Buttons = (props) => {
    // return(
    //     props.type === 'primary'? 
    //     <button className='bg-blue-600 text-white font-medium text-base rounded-md px-4 py-2'>Sign Up</button> : 
    //     <button className='text-base font-medium text-blue-600 px-4 py-2'>Login</button>
    // )
    if (props.type === 'signup') {
        return (
            <button className='bg-blue-600 text-white font-medium text-base rounded-md px-4 py-2'>{props.text}</button>
        )
    } else if (props.type === 'login') {
        return (
            <button className='text-base font-medium text-blue-600 px-4 py-2'>{props.text}</button>
        )
    } else if(props.type === 'find'){
        return (
            <button className='flex items-center gap-2 text-base font-medium text-white px-4 py-2 bg-blue-800 hover:bg-blue-600 rounded-md w-fit'>
                {props.text}  <span><AiOutlineArrowRight className='text-lg'/></span>
            </button>
        )
    }else{
        return(
            <button className='flex items-center gap-2 text-base font-medium text-blue-600 px-4 py-2 bg-white hover:text-blue-800 rounded-md w-fit'>
                {props.text}  <span><AiOutlineArrowRight className='text-lg'/></span>
            </button>
        )
    }
}

export default Buttons