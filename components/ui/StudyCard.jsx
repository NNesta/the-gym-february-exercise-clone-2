import React from 'react'

const StudyCard = ({image,title, description,styles}) => {
  return (
    <div className={`${styles} min-h-[380px] bg-white my-4`}>
      <img src={image} alt=""/> 
      <div className='flex flex-col gap-6 p-4'> 
        <h3 className='text-[21px] leading-[25px]'>{title}</h3>
        <h5 className='text-[18px] leading-[26px] tracking-[0.15px]'>{description}</h5>
        </div>
    </div>
  )
}

export default StudyCard