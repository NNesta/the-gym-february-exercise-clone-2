import React from "react";

const SpotlightCard = ({ image, title, description, date }) => {
  return (
    <div className="flex flex-col gap-4 min-h-[379px] border-2 border-primary group">
      <img className="group-hover:opacity-80" src={image} alt="" />
      <div className="flex-1 flex flex-col p-4">
        <h2 className="text-[21px] leading-[25px] w-fit group-hover:bg-[#e3e3e3]">
          {title}
        </h2>
        <p className="flex-1 text[18px] leading-[22px]">{description}</p>
        <div>
          <span>{date}</span> <span>News</span>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
