import React from "react";
import Wrapper from "../ui/Wrapper";
import Title from "../ui/Title";
import Link from "next/link";
import InformationCard from "../ui/InformationCard";

const QuickLinks = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center my-20">
        <Title>Important quicklinks</Title>
        <div className="flex flex-col lg:flex-row w-full justify-between ">
          <div className="flex gap-4 items-center calc(33.3333% - 37.3333px) text-center mb-4 group">
            <img
              className="rounded-full"
              src="/assets/pen.png"
              alt=""
              srcset=""
            />
            <h3 className="text-[21px] leading-[25px] group-hover:bg-[#e3e3e3]">
              For personnel
            </h3>
          </div>
          <div className="flex gap-4 items-center calc(33.3333% - 37.3333px)  text-center mb-4 group">
            <img
              className="rounded-full"
              src="/assets/folder.png"
              alt=""
              srcset=""
            />
            <h3 className="text-[21px] leading-[25px] group-hover:bg-[#e3e3e3]">
              Aalto Handbook
            </h3>
          </div>
          <div className="flex gap-4 items-center calc(33.3333% - 37.3333px)  text-center mb-4 group">
            <img
              className="rounded-full"
              src="/assets/phone.png"
              alt=""
              srcset=""
            />
            <h3 className="text-[21px] leading-[25px] group-hover:bg-[#e3e3e3]">
              Safety
            </h3>
          </div>
        </div>
      </div>
      <div>
        <Title>Explore our six schools </Title>
        <p>
          Scientific research and artistic activities are carried out at six
          schools and their departments and units.
        </p>
        <div className="grid lg:grid-cols-2 gap-4 my-6">
          {[
            {
              title: "School of Arts, Design and Architecture",
              description:
                "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
              image: "/assets/explore-1.jpg",
            },
            {
              title: "School of Engineering",
              description:
                "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
              image: "/assets/explore-2.jpg",
            },
            {
              title: "School of Business",
              description:
                "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
              image: "/assets/explore-3.jpg",
            },
            {
              title: "School of Chemical Engineering",
              description:
                "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
              image: "/assets/explore-4.jpg",
            },
            {
              title: "School of Electrical Engineering",
              description:
                "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
              image: "/assets/explore-5.jpg",
            },
            {
              title: "School of Science",
              description:
                "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
              image: "/assets/explore-6.jpg",
            },
          ].map((item, index) => (
            <InformationCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-2">
          <img
            src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_333_800w_600h_n/public/2018-04/unto_rautio_aalto_unt9424_weblarge_jpg.jpg?h=0d9f7c6e&itok=blqBmH_o"
            alt=""
          />
          <div className="pt-12 pb-12 pl-14 my-[66px]">
            <Title>Campus - lively and thriving</Title>
            <p className="text-[18px] tracking-[0.15px] leading-[26px] mb-6">
              Aalto University campus in Otaniemi is a renewable and living
              environment for research, art, learning, entrepreneurship and
              housing. The campus area inspires people to collaborate, try out
              new ideas and innovate together.
            </p>
            <ul>
              {[
                {
                  title: "Explore our vibrant innovation ecosystem",
                  link: "/explore",
                },
                { title: "Explore our campus", link: "explore" },
                { title: "Book a space", link: "book" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    className="flex items-center group text-[18px] leading-[22px]  mb-4 hover:bg-[#e3e3e3] w-fit"
                    href={item.link}
                  >
                    <span class="material-symbols-outlined group-hover:translate-x-1">
                      arrow_right_alt
                    </span>
                    <span className="underline">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 my-20">
          <div className="pt-12 pb-12 pl-14 lg:my-[66.35px]">
            <Title>Virtual Campus Experience</Title>
            <p className="text-[18px] tracking-[0.15px] leading-[26px] mb-6">
              Explore Aalto University???s campus from anywhere in the world! Our
              digital guides, an Aalto University student and an assistant
              professor, introduce you to our learning facilities, laboratories,
              workshops, service spots and outdoor spaces. The tour can be
              experienced on desktop, mobile or VR headset.
            </p>
            <ul>
              {[
                {
                  title: "Visit the tour",
                  link: "visit",
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    className="flex items-center group text-[18px] leading-[22px] w-fit mb-4 hover:bg-[#e3e3e3]"
                    href={item.link}
                  >
                    <span class="material-symbols-outlined group-hover:translate-x-1">
                      arrow_right_alt
                    </span>
                    <span className="underline">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_6_690w_431h_d/public/2021-02/aalto-website-3.jpg?h=e1c30e35&itok=JNNANuU2"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default QuickLinks;
