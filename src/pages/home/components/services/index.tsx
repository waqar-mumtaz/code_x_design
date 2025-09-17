import React from "react";
import Service from "./service";
import { servicesData } from "@/assets/data";

const Services = () => {
  return (
    <section className="mt-10 md:mt-40 my-container">
      <div className="text-center mb-10">
        <h5 className="lato-black text-sm tracking-widest">WHAT WE DO</h5>
        <h1 className="lato-black text-5xl text-blue animate-fade-in-up">
          Our Core Services
        </h1>
      </div>
      <div className="md:grid  md:grid-cols-4 gap-5 grid-cols-none">
        {servicesData.map((service) => (
          <Service
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            active={service.active}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
