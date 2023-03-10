import React from "react";
import { FiLink2 } from "react-icons/fi";

const Title = ({ children, styles }) => {
  return (
    <div className="group flex gap-8 items-center">
      <h1 className={`text-[28px] ${styles} leading-[33px] mb-4 font-bold`}>
        {children}
      </h1>
      <FiLink2 size={20} className="hidden group-hover:block mb-3" />
    </div>
  );
};

export default Title;
