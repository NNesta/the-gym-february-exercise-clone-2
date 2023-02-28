import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="group">
      <h1 className='text-5xl font-bold group-focus:after:content-["!"] group-hover:after:content-["\""] after:content-["?"]'>
        A
      </h1>
      <h4>Aalto University</h4>
    </Link>
  );
};

export default Logo;
