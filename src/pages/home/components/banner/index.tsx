import React from "react";

import best_design from "@/assets/imgs/best_design.png";
import { bannerText } from "@/assets/data";
const Banner = () => {
  return (
    <section>
      <div className="mt-16 flex flex-col  md:flex-row items-center md:mt-40 gap-4">
        <div className="text-center  md:text-left flex flex-col gap-y-4 animate-fade-in-up">
          <div>
            <p className="lato-black text-sm uppercase">{bannerText.prefix}</p>
            <h1 className="lato-black text-5xl  md:text-6xl text-blue">
              {bannerText.title}
            </h1>
          </div>
          <p className="text-gray-500 lato-regular text-base">
            {bannerText.description}
          </p>
          <div className="flex justify-center md:justify-start mt-2">
            <button className="py-2 px-6 bg-blue-600 rounded-md text-white items-center flex gap-2 hover:bg-black transition-colors duration-500">
              Get Started
              <i className="fa-solid fa-circle-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="hidden md:flex animate-fade-in-up animation-delay-400">
          <img src={best_design} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
