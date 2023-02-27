import React from 'react';
import {FiLink2} from 'react-icons/fi';

const Title = ({children,styles}) => {
  return (
    <div className={`group ${styles} flex gap-8 items-center`}>
        <h1 className='text-[28px] leading-[33px] mb-4 '>{children}</h1>
          <FiLink2 className='hidden group-hover:block'/>
    </div>
  )
}

export default Title