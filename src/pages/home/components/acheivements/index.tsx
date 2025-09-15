import React from "react";

import experience from "@/assets/imgs/BBlaze.png";
import user from "@/assets/imgs/user.png";
import customer from "@/assets/imgs/costumer.png";
import customer_retention from "@/assets/imgs/customer-retention.png";
import tick from "@/assets/imgs/tick.png";
import package_2 from "@/assets/imgs/package-2.png";

const Acheivements = () => {
  return (
    <section className="my-10 md:my-40">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2">
        {/* Left Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-gray-100 py-2 px-4">
            <img className="w-6/12 mx-auto" src={experience} alt="" />
            <div className="text-center mt-4">
              <h1 className="text-4xl lato-black text-blue">6+</h1>
              <p className="text-lg text-gray-600">Years of Experience</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-blue-300 flex flex-col md:flex-row items-center justify-center md:justify-start pl-6 py-5">
              <img className="w-80 md:w-16" src={user} alt="" />
              <div className="text-center md:text-left pl-3 mt-4 md:mt-0">
                <h1 className="text-4xl lato-bold text-blue">15+</h1>
                <p className="text-lg text-gray-600">Employees</p>
              </div>
            </div>

            <div className="bg-blue-300 flex flex-col md:flex-row items-center justify-center md:justify-start pl-6 py-5">
              <img className="w-80 md:w-16" src={customer} alt="" />
              <div className="text-center md:text-left pl-3 mt-4 md:mt-0">
                <h1 className="text-4xl lato-bold text-blue">30+</h1>
                <p className="text-lg text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <div className="bg-blue-300 flex flex-col md:flex-row items-center justify-center md:justify-start pl-6 py-5">
              <img className="w-80 md:w-16" src={customer_retention} alt="" />
              <div className="text-center md:text-left pl-3 mt-4 md:mt-0">
                <h1 className="text-4xl lato-bold text-blue">80%</h1>
                <p className="text-lg text-gray-600">Repeat Clients</p>
              </div>
            </div>

            <div className="bg-blue-300 flex flex-col md:flex-row items-center justify-center md:justify-start pl-6 py-5">
              <img className="w-80 md:w-16" src={tick} alt="" />
              <div className="text-center md:text-left pl-3 mt-4 md:mt-0">
                <h1 className="text-4xl lato-bold text-blue">100%</h1>
                <p className="text-lg text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-2 px-4">
            <img className="w-6/12 mx-auto" src={package_2} alt="" />
            <div className="text-center mt-4">
              <h1 className="text-4xl lato-black text-blue">70+</h1>
              <p className="text-lg text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acheivements;
