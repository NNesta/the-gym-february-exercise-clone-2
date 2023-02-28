import React from "react";
import Link from "next/link";

const Logo = ({ small }) => {
  return (
    <Link href="/" className="font-[900] group cursor-pointer relative z-[500]">
      <h1
        className={`${
          small ? "text-xl" : "text-5xl"
        } text- group-focus:after:content-["!"] group-hover:after:content-["\""] after:content-["?"]`}
      >
        A
      </h1>
      <h4 className={`${small ? "text-xs" : "text-base"}`}>Aalto University</h4>
    </Link>
  );
};

export default Logo;
