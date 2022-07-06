import React from 'react'
import Buttons from '../Buttons/Buttons'

const Explorer = () => {
    return (
        <div className='h-[350px] md:h-[200px] bg-blue-600 md:mt-32 flex mb-20'>
            <div className="explorerWrap flex flex-col md:flex-row xl:w-[800px] lg:w-[600px] w-[500px] m-auto items-center">
                <div className="text w-1/2 justify-center flex flex-col">
                    <p className='font-semibold text-white text-2xl mb-4'>Explore a job now</p>
                    <p className='text-slate-300 '>Don't wait again. Explore and apply the best job suit to your skill and get ready for a new team </p>
                </div>
                <div className="buttonExplore mt-4 w-1/2 flex content-center justify-center md:justify-end items-center">
                    <Buttons type='explore' text='Explore'/>
                </div>
            </div>
        </div>
    )
}

export default Explorer