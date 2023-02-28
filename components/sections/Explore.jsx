import React from "react";
import Wrapper from "../ui/Wrapper";
import InformationCard from "../ui/InformationCard";

const Explore = () => {
  return (
    <div className="grid max-w-[1540px] mx-auto grid-cols-[8px_1fr_8px] lg:grid-cols-[80px_1fr_80px] grid-rows-[150px_100px_250px] lg:grid-rows-[150px_200px_100px] my-8">
      <div className="col-start-1 col-end-4 row-start-1 row-end-3 bg-green-400">
        <img
          className="object-cover h-full w-full"
          src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/s2560wc_1800w_400h_n/public/2020-01/unto_rautio_aalto_dsc5557_web.jpg?itok=vZ292N9N"
          alt=""
        />
      </div>

      <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-[#ffcd00] z-20">
        <h1 className="text-[30px] leading-9 lg:text-[75px] lg:leading-22 font-bold px-8">
          Explore Aalto University
        </h1>
      </div>
      <div className="col-start-2 col-end-3 row-start-3 row-end-4 bg-[#ffcd00] z-20">
        <div className="h-full grid lg:grid-cols-3 items-center  divide-x-2 divide-primary border-t-2 border-primary">
          <div className="h-full py-6">
            <p className="text-[28px] leading-[33px] text-center hover:bg-[#e3e3e3] w-fit mx-auto underline">
              Study at Aalto
            </p>
          </div>
          <div className="h-full py-6">
            <p className="text-[28px] leading-[33px] text-center hover:bg-[#e3e3e3] w-fit mx-auto underline">
              Open positions
            </p>
          </div>
          <div className="h-full py-6">
            <p className="text-[28px] leading-[33px] text-center hover:bg-[#e3e3e3] w-fit mx-auto underline">
              Contact us
            </p>
          </div>
        </div>
      </div>
    </div>
    //
  );
};

export default Explore;
