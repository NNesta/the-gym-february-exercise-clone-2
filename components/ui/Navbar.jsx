import React from "react";
import Link from "next/link";
import { BiLockAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="group">
        <h1 className='text-5xl font-bold group-hover:after:content-["\""] after:content-["?"]'>
          A
        </h1>
        <h4>Aalto University</h4>
      </div>
      <div className="flex items-center">
        <ul>
          <li>
            <Link
              className="flex items-center gap-2 text-black"
              href="/support"
            >
              <BiLockAlt size={20} />
              <span>For personnel</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 text-black"
              href="/support"
            >
              <BiLockAlt size={20} />
              <span>Support us</span>
            </Link>
          </li>
        </ul>
        <ul>
            <li className="flex items-center ">
    <span>EN</span>
            </li>
            <li className="flex items-center ">
    <span>Search</span>
            </li>
            <li className="flex items-center ">
                
    <span>Menu</span>
            </li>
        </ul>
        <Link href='login'>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
