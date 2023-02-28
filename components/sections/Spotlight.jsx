import React from "react";
import Button from "../ui/Button";
import Wrapper from "../ui/Wrapper";
import SpotlightCard from "../ui/SpotlightCard";
import Title from "../ui/Title";

const Spotlight = () => {
  return (
    <Wrapper styles="my-16">
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="my-8">
          <Title>Spotlight</Title>
          <p className="text-[21px] leading-[25px] -bold">
            Find more current news and interesting events on the News and events
            page.
          </p>
        </div>

        <Button link="news">See all Aalto University news</Button>
      </div>
      <div className="grid lg:grid-cols-3 items-center justify-between gap-4">
        {[
          {
            image: "/assets/news-1.jpg",
            title: "Shrinking from the heat",
            description: "Reactive fabrics respond to changes in temperature",
            date: "21.2.2023",
          },
          {
            image: "/assets/news-2.jpg",
            title: "Knit an Aalto hat for yourself or a friend!",
            description:
              "Follow Marja Niemi and Outi Elina Kansanen’s knitting pattern to make a lovely gift for someone special",
            date: "13.2.2023",
          },
          {
            image: "/assets/news-3.jpg",
            title:
              "Aalto Startup Center makes global top three in 2021-2022 university business accelerator ranking",
            description:
              "UBI Global World Benchmark Study ranks top business incubators and accelerators ",
            date: "25.1.2023",
          },
        ].map((item, index) => (
          <SpotlightCard
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Spotlight;
