import React from 'react'
import { styles } from '@/styles/Home.module.css';

const Wrapper = ({children,styles}) => {
  return (
    <div className={`max-w-[1540px] mx-auto ${styles}`}>
        {children}
    </div>
  )
}

export default Wrapper