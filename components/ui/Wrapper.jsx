import React from "react";

const Wrapper = ({ children, styles }) => {
  return (
    <div className={`w-full max-w-[1540px] mx-auto px-4 md:px-20 ${styles}`}>
      {children}
    </div>
  );
};

export default Wrapper;
