import React from "react";
import Wrapper from "../ui/Wrapper";
import Link from "next/link";
import Title from "../ui/Title";

const Follow = () => {
  return (
    <div className="bg-[#FFCD00] min-h-[400px]">
      <Wrapper>
        <div className="py-[120px] flex flex-col items-center">
          <Title styles="text-[75px] leading-22 text-center font-bold">
            Follow us
          </Title>
          <ul className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {[
              { title: "facebook", link: "facebook" },
              { title: "twitter", link: "twitter" },
              { title: "instagram", link: "instagram" },
              { title: "linkedin", link: "linkedin" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  className="text-[36px] leading-[42px] text-center mb-6 underline hover:bg-white"
                  href={item.link}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};

export default Follow;
