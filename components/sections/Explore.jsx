import React from 'react'
import Wrapper from '../ui/Wrapper'
import InformationCard from '../ui/InformationCard'

const Explore = () => {
  return (
    <div className=" h-screen  bg-cover bg-['https://www.aalto.fi/sites/g/files/flghsv161/files/styles/s2560wc_1800w_400h_n/public/2020-01/unto_rautio_aalto_dsc5557_web.jpg?itok=vZ292N9N']">
        
    <Wrapper styles="relative" >
        <div className='bg-[#ffcd00] bottom-0'>
            <h1 className='text-[30px] leading-9 lg:text-[75px] lg:leading-22 font-bold px-8'>Explore Aalto University</h1>
            
        </div>
        <div className='grid lg:grid-cols-3 divide-x-2 divide-primary border-t border-primary'>
             <div className=''>
                <p className='text-[28px] leading-[33px] text-center hover:bg-white underline'>Study at Aalto</p>
             </div>
             <div className=''>
                <p className='text-[28px] leading-[33px] text-center hover:bg-white underline'>Open positions</p>
             </div>
             <div className=''>
                <p className='text-[28px] leading-[33px] text-center hover:bg-white underline'>Contact us</p>
             </div>
            </div>
    </Wrapper>
    </div>
  )
}

export default Explore