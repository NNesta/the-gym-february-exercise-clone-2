import React from "react";
import Link from "next/link";
import { BiLockAlt, BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoGlobeSharp } from "react-icons/io5";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white flex justify-between items-center px-14 h-[110px]">
     <Logo/>
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-10">
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
              <CiHeart size={20} />
              <span>Support us</span>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-10">
          <li className="flex items-center gap-2">
            <IoGlobeSharp />
            <span>EN</span>
            <span class="material-symbols-outlined">expand_more</span>
          </li>
          <li className="flex items-center gap-2">
            <BiSearch/>
            <span>Search</span>
          </li>
          <li className="flex items-center gap-2">
          <span class="material-symbols-outlined">
menu
</span>
            <span>Menu</span>
          </li>
        </ul>
        <Button link="login">Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
