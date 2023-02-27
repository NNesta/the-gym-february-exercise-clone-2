import React from "react";
import Wrapper from "../ui/Wrapper";
import Title from "../ui/Title";
import StudyCard from "../ui/StudyCard";

const Reasearch = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <Wrapper>
        <div className="pt-14 pb-24">
          <Title>Read about our research and donate </Title>
          <p className="text-[18px] leading-[26px] tracking-[0.15px] max-w-[914px]">
            At Aalto University, we create the conditions for innovation,
            economic growth, employment and wellbeing. A gift to the university
            is an investment in a better future.
          </p>
          <div className="grid lg:grid-cols-2 gap-4">
            {[
              {
                image:
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2018-06/sensual-mathematics-exhibition-by-henri-vogt_11_0.jpg?h=b2774bcf&itok=JPx0BajZ",
                title: "Research & Art",
                description:
                  "Our research focuses on seven key areas combining four core competences in the fields of ICT, materials, arts, design and business together with three grand challenges related to energy, living environment, and health.",
              },
              {
                image:
                  "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2021-10/Unto_Rautio_Aalto_UNT6810.jpg?h=ca5d94f6&itok=qLAjl2z2",
                title: "Give for the future",
                description:
                  "Join us in building a sustainable future! Together we can solve some of the toughest problems of our time.",
              },
            ].map((item, index) => (
              <StudyCard styles="min-h-[482px]" key={index} {...item} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Reasearch;
