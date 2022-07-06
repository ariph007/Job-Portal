import React from 'react'
import google from '../../assets/img/googleLogo.png'
import netflix from '../../assets/img/netflixLogo.png'
import samsung from '../../assets/img/samsungLogo.png'
import shopee from '../../assets/img/shopeeLogo.png'
import tokopedia from '../../assets/img/tokopediaLogo.png'

const Partner = () => {
  return (
    <div className='flex justify-center mt-20 flex-col'>
        <p className='text-slate-600 font-semibold text-base text-center mb-4'>Trusted  more than <span className='text-center font-semibold text-base text-blue-600'>+2500 company and leading universities </span>in Indonesia</p>
        <div className='flex justify-center md:flex-row flex-col items-center gap-2 md:flex-wrap'>
            <img className=' w-[180px] object-contain' src={google} alt="" />
            <img className=' w-[180px] object-contain' src={netflix} alt="" />
            <img className=' w-[180px] object-contain' src={samsung} alt="" />
            <img className=' w-[180px] object-contain' src={shopee} alt="" />
            <img className=' w-[180px] object-contain' src={tokopedia} alt="" />
        </div>
    </div>
  )
}

export default Partner