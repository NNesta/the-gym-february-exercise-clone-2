import React from 'react';
import Link from 'next/link';

const FooterCard = ({title, contents}) => {
  return (
    <div>
        <h1>{title}</h1>
        <ul className='flex flex-col gap-2'>
            {
             contents.map((item, index) => <li key={index}>
                <Link href={item.link}>{item.title}</Link>
             </li>)   
            }
        </ul>
    </div>
  )
}

export default FooterCard