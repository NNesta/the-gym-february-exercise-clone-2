import React from "react";

const ActivityCard = ({ image, description }) => {
  return (
    <div className="group">
      <img className="group-hover:opacity-80" src={image} alt="" />
      <p className="p-2">{description}</p>
    </div>
  );
};

export default ActivityCard;
