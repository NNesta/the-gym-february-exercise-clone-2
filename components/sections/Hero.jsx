import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-[1920px] lg:grid grid-cols-[80px_680px_1fr_80px] grid-rows-[400px_280px_50px] mx-auto mt-[110px]">
      <div className="col-start-2 col-end-2 row-start-2 row-end-4 z-20 bg-primary text-white py-6 px-10">
        <h1 className="text-[36px] leading-[42px] mb-4">
          How tech is transforming diagnostics and care
        </h1>
        <p className="text-[21px] leading-[25px] mb-4">
          Read three inspiring stories of how Aaltonians are bringing new hope
          to people who suffer from
        </p>
        <ul>
          {[
            {
              title: "Alzheimers disease",
              link: "alzheimers",
            },
            { title: "ADHD", link: "adhd" },
            { title: "Alcoholism", link: "alcoholism" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                className="flex items-center group text-[18px] leading-[22px] mb-4 "
                href={item.link}
              >
                <span class="material-symbols-outlined group-hover:translate-x-1">
                  arrow_right_alt
                </span>
                <span className="underline pl-4">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-start-1 col-end-5 row-start-1 row-end-3">
        <img
          className="object-cover h-full w-full"
          src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2022-03/Blue%20and%20yellow%20flags%20by%20Kalle%20Kataila%2003032022%20001.png?h=74c6825a&itok=eo-pgDDo"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
