import React from 'react'

const SpotlightCard = ({image, title, description, date}) => {
  return (
    <div className='flex flex-col gap-4 min-h-[379px] border-2 border-primary'>
        <img className="" src={image} alt="" />
        <div className='flex-1 flex flex-col p-4'>
          <h2 className='text-[21px] leading-[25px]'>{title}</h2>
          <p className='flex-1 text[18px] leading-[22px]'>{description}</p>
          <div>
            <span>{date}</span> <span>News</span>
          </div>
        </div>

    </div>
  )
}

export default SpotlightCard