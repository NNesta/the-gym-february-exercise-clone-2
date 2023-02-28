import React from "react";
import Button from "../ui/Button";
import Wrapper from "../ui/Wrapper";
import SpotlightCard from "../ui/SpotlightCard";
import Title from "../ui/Title";

const Event = () => {
  return (
    <div>
      <Wrapper styles="my-16">
        <div className="flex flex-col lg:flex-row items-center justify-between ">
          <div className="my-8">
            <Title>Join our many events </Title>
            <p className="text-[21px] leading-[25px] -bold">
              Find more current news and interesting events on the News and
              events page.
            </p>
          </div>

          <Button link="news">See all events</Button>
        </div>
        <div className="grid lg:grid-cols-3 justify-between gap-4">
          {[
            {
              image:
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2023-02/solvethesdgs_7.png?h=47551150&itok=pzdMdNKN",
              title: "Shrinking from the heat",
              description: "Reactive fabrics respond to changes in temperature",
              date: "21.2.2023",
            },
            {
              image:
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2023-02/energy_futures_1920x1080_orange.jpg?h=ae21e8e5&itok=9dmeTYPD",
              title: "Knit an Aalto hat for yourself or a friend!",
              description:
                "Follow Marja Niemi and Outi Elina Kansanen’s knitting pattern to make a lovely gift for someone special",
              date: "13.2.2023",
            },
            {
              image:
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2023-01/SSD2023_hero_image_1920x1200px_150dpi_2.png?h=3bf3b255&itok=CKSPCq8U",
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
    </div>
  );
};

export default Event;
