import React from "react";
import InformationCard from "../ui/InformationCard";
import Wrapper from "../ui/Wrapper";
import Title from "../ui/Title";

const Information = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-8 my-14">
        <Title>Information on Ukraine and coronavirus </Title>
        <div className="grid lg:grid-cols-2 gap-4">
          {[
            {
              title: "Ukraine war",
              description:
                "On this page, we will gather information on how Russia's i...",
              image: "/assets/information-1.png",
            },
            {
              title: "Information on coronavirus",
              description:
                "Information on the effects of coronavirus and COVID-19...",
              image: "/assets/information-2.jpg",
            },
          ].map((item, index) => (
            <InformationCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Information;
