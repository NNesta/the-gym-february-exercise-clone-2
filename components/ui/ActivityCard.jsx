import React from "react";

const ActivityCard = ({ image, description }) => {
  return (
    <div className="">
      <img className="" src={image} alt="" />
      <p className="p-2">{description}</p>
    </div>
  );
};

export default ActivityCard;
