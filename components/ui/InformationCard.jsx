import React from "react";

const InformationCard = ({ title, description, image }) => {
  function truncateString(str, n) {
    if (str.length > n) {
      return str.substring(0, n) + "...";
    } else {
      return str;
    }
  }
  return (
    <div className="flex items-end justify-between border border-primary">
      <div className="flex flex-col gap-4 px-4 pb-4">
        <h3 className="text-[21px] leading-[25px] font-medium">{title}</h3>
        <p className="hidden md:block text-[16px] leading-[18px] font-medium">
          {truncateString(description, 64)}
        </p>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default InformationCard;
