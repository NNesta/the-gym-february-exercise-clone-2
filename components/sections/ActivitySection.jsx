import React from "react";
import Wrapper from "../ui/Wrapper";
import ActivityCard from "../ui/ActivityCard";
import Title from "../ui/Title";

const ActivitySection = () => {
  return (
    <Wrapper>
      <div className="grid lg:grid-cols-4 gap-4">
        {[
          {
            image:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=VYThRuwV",
            description:
              "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
          },
          {
            image:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Otaniemi_Garden_plots_3-6-2020_photo_Mikko_Raskinen_003_0.jpg?itok=Vng5fdwh",
            description:
              "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
          },
          {
            image:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto%20University%20Va%CC%88re%20Tuomas%20Uusheimo-180709-aalto-vare-015.jpg?itok=r0KJCZur",
            description:
              "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
          },
          {
            image:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/4.jpg?itok=rlgwZSLs",
            description:
              "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
          },
          {
            image:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/La%CC%88nsimetro_avajaiset_18112017_%C2%A9JaakkoKahilaniemi-1322.jpg?itok=HI1_9DSA",
            description:
              "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
          },
          {
            image:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/midgard/images/1e75bf8f2258e8a5bf811e7b96a6dad767c7f287f28-aaltofestival_naytos16_student-ma-collection_23_maija_mero_25-5-2016_photo_mikko_raskinen_035_en_en_fi_fi.jpg?itok=AUafdI2y",
            description:
              "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
          },
          {
            image:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/37135037943_32840d9184_o.jpg?itok=jtGoBONW",
            description:
              "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
          },
          {
            image:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto_Vision_Forum_07062018_photo_by_Lasse_Lecklin_014%281%29.jpg?itok=R8uYSV9p",
            description:
              "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
          },
        ].map((item, index) => (
          <ActivityCard
            key={index}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
      <div className="flex flex-col text-center my-16">
        <Title styles="self-center">Community voices</Title>
        <div className="grid lg:grid-cols-3 justify-between">
          <div className="flex items-center justify-center basis-[calc(33.3333% - 37.3333px)] gap-4 group">
            <img
              className="rounded-full  group-hover:opacity-80"
              src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/Esa_Saarinen_Filosofia_ja_systeemiajattelu_online_02-2021_photo_Mikko_Raskinen_012%281%29.jpg?h=ac778ff2&itok=Dw8j1SUG"
            />
            <p className="text-[21px] leading-[25px] group-hover:bg-[#e3e3e3]">
              Watch our videos
            </p>
          </div>
          <div className="flex items-center justify-center basis-[calc(33.3333% - 37.3333px)] gap-4 group">
            <img
              className="rounded-full  group-hover:opacity-80"
              src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/27400150666_8649bc706c_o_Original_thumbnail.jpg?h=d743a63a&itok=dwD4tEs5"
            />
            <p className="text-[21px] leading-[25px] group-hover:bg-[#e3e3e3]">
              Watch our videos
            </p>
          </div>
          <div className="flex items-center justify-center basis-[calc(33.3333% - 37.3333px)] gap-4 group">
            <img
              className="rounded-full  group-hover:opacity-80"
              src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/51231849380_1ab308fe43_o%281%29.jpg?h=7d7cf671&itok=cvaMq0eI"
            />
            <p className="text-[21px] leading-[25px] group-hover:bg-[#e3e3e3]">
              Watch our videos
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ActivitySection;
