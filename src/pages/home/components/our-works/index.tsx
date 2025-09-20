import React from "react";

import haider from "@/assets/imgs/haider.webp";
import hS_products from "@/assets/imgs/HS-Products-1-1.png";
import almunnaf from "@/assets/imgs/almunnaf.png";
import mushtaq from "@/assets/imgs/mushtaq.webp";
import budget_blaze from "@/assets/imgs/Budget-Blaze.png";
import bblaze from "@/assets/imgs/BBlaze.png";

const OurWorks = () => {
  return (
    <section className="mt-28 my-container">
      <div className="text-center">
        <h5 className="lato-black tracking-widest text-sm uppercase ">
          see what we work
        </h5>
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          data-aos-offset="100"
          className="text-3xl md:text-5xl lato-black text-blue md:tracking-wider"
        >
          Our Latest Work
        </h1>
      </div>
      <div className="md:grid grid-cols-2 gap-6 py-9">
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
          className="order-1 text-center md:text-left"
        >
          <h5 className="lato-bold">eCommerce Store</h5>
          <h1 className="lato-black text-2xl md:text-4xl text-blue">
            HS Products Website
          </h1>
          <p className="text-gray-600 lato-regular text-base">
            HS Products is Online Store selling Door Handles in United Kingdom.
            This website is build using WordPress CMS with the help of Page
            Builder.
          </p>
          <p className="lato-regular-italic text-gray-500 text-center px-10 md:px-16 text-lg py-8">
            Thank you for delivering an exceptional eCommerce website for HS
            Products. The design is clean, the navigation is intuitive, and it
            perfectly showcases our product range. You made the entire process
            smooth and efficient.
          </p>
          <div className="flex items-center gap-5 justify-center mb-10">
            <img className="w-12 rounded-full" src={haider} alt="" />
            <h5 className="text-gray-500 lato-bold text-sm">Haider Shahzad</h5>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1300"
          data-aos-delay="150"
          className="order-2"
        >
          <img src={hS_products} alt="" />
        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-6 py-9">
        <div
          data-aos="fade-left"
          data-aos-duration="1400"
          data-aos-delay="200"
          className="order-1 md:order-2 text-center md:text-left"
        >
          <h5 className="lato-bold">Business Website</h5>
          <h1 className="lato-black text-2xl md:text-4xl text-blue">
            Al Munnaf Services
          </h1>
          <p className="text-gray-600 lato-regular text-base">
            Al Munnaf Traders is a Construction Company working in different
            countries. This website is build using WordPress CMS with the help
            of Page Builder.
          </p>
          <p className="lato-regular-italic text-gray-500 text-center px-8 md:px-14 text-lg py-8">
            We couldn’t be happier with the website developed for ALMUNNAF. It
            perfectly represents our services with a professional and
            user-friendly design. The team understood our vision and delivered
            beyond expectations.
          </p>
          <div className="flex items-center gap-5 justify-center mb-10">
            <img className="w-12 h-12 rounded-full" src={mushtaq} alt="" />
            <h5 className="text-gray-500 lato-bold text-sm">Engr. Mushtaq</h5>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="250"
          className="order-2 md:order-1"
        >
          <img src={almunnaf} alt="" />
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-6 py-9 text-center md:text-left">
        <div
          data-aos="fade-right"
          data-aos-duration="1600"
          data-aos-delay="300"
        >
          <h5 className="lato-bold">Finance Application</h5>
          <h1 className="lato-black text-2xl md:text-4xl text-blue">
            Budget Blaze
          </h1>
          <p className="text-gray-600 lato-regular text-base">
            Budget Blaze is a Finance Application used to manage your income and
            expenses. This App is develop using Flutter and Firebase.
          </p>
          <p className="lato-regular-italic text-gray-500 text-center px-6 md:px-12 text-lg py-6">
            The mobile application you developed for Budget Blaze is
            outstanding. The intuitive design and smooth functionality make
            tracking income and expenses effortless for users.
          </p>
          <div className="flex items-center gap-5 justify-center mb-10">
            <img className="w-12 rounded-full" src={bblaze} alt="" />
            <h5 className="text-gray-500 lato-bold text-sm">M Usama</h5>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2100" data-aos-delay="700">
          <img src={budget_blaze} alt="" />
        </div>
      </div>
      <div className="flex justify-center py-6">
        <button className="py-2 px-6 bg-blue-600 rounded-md text-white items-center flex gap-2 hover:bg-black transition-colors duration-500">
          View All Your Work
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default OurWorks;
