import React from 'react';
import Link from 'next/link';

const Button = ({children,styles, link}) => {
  return (
    <div className="hover:bg-[#ffcd00] py-[10px] px-[31px] leading-[18px] border-2 border-primary rounded-[29px]">
    <Link href={link} className={`p-4 ${styles}`}>
        {children}
        </Link></div>
  )
}

export default Button