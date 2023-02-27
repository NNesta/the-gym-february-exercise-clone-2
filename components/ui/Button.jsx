import React from 'react';
import Link from 'next/link';

const Button = ({title,styles, link}) => {
  return (
    <Link href={link} className={`${styles}`}>
        {title}
        </Link>
  )
}

export default Button