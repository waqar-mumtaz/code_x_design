import React from "react";

import logistics from "@/assets/imgs/Logistics.png";
import realestate from "@/assets/imgs/realestate.png";
import fitness from "@/assets/imgs/Fitness.png";
import travel from "@/assets/imgs/travel.png";
import social from "@/assets/imgs/social.png";
import ecommerce from "@/assets/imgs/ecommerce.png";
import tutor from "@/assets/imgs/Tutor.png";

const Experience = () => {
  return (
    <section>
      <div className="text-center">
        <h5 className="lato-bold tracking-wider text-sm">AREAS OF EXPERTISE</h5>
        <h1 className="text-5xl lato-black text-blue tracking-wider">
          Industry Experience
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-7">
        <div>
          <img src={logistics} alt="" />
          <div className="bg-blue-100 text-center h-80 px-7 pt-7 mt-6">
            <h2 className="lato-bold text-xl tracking-wider text-blue">
              Logistics
            </h2>
            <p className="lato-regular mt-4">
              Our logistics website service streamlines the movement of goods.
              From efficient supply chain management to tracking shipments, we
              optimize logistics processes for businesses, ensuring seamless
              transportation and delivery solutions.
            </p>
          </div>
        </div>
        <div>
          <img src={realestate} alt="" />
          <div className="bg-blue-100 text-center h-80 px-7 pt-7 mt-6">
            <h2 className="lato-bold text-xl tracking-wider text-blue">
              Real Estate
            </h2>
            <p className="lato-regular mt-4">
              Discover your dream home with our real estate website service.
              Explore property listings, connect with agents, and find the
              perfect place to call your own. Your ideal home is just a click
              away.
            </p>
          </div>
        </div>
        <div>
          <img src={fitness} alt="" />
          <div className="bg-blue-100 text-center h-80 px-7 pt-7 mt-6">
            <h2 className="lato-bold text-xl tracking-wider text-blue">
              Health & Fitness
            </h2>
            <p className="lato-regular mt-4">
              Elevate your well-being with our health and fitness website
              service. Access workouts, nutrition guidance, and expert tips to
              achieve your fitness goals and lead a healthier, happier life.
            </p>
          </div>
        </div>
        <div>
          <img src={travel} alt="" />
          <div className="bg-blue-100 text-center h-80 px-7 pt-7 mt-6">
            <h2 className="lato-bold text-xl tracking-wider text-blue">
              Travel & Hotel
            </h2>
            <p className="lato-regular mt-4">
              Our travel website service offers a one-stop solution for all your
              travel needs. From flight and hotel bookings to destination
              guides, we make your journey a seamless and unforgettable
              experience.
            </p>
          </div>
        </div>
        <div>
          <img src={social} alt="" />
          <div className="bg-blue-100 text-center h-80 px-7 pt-7 mt-6">
            <h2 className="lato-bold text-xl tracking-wider text-blue">
              Social Networking
            </h2>
            <p className="lato-regular mt-4">
              Connect and engage with friends and the world through our social
              networking website service. Share moments, discover new
              connections, and stay updated on the latest trends in a vibrant
              online
            </p>
          </div>
        </div>
        <div>
          <img src={ecommerce} alt="" />
          <div className="bg-blue-100 text-center h-80 px-7 pt-7 mt-6">
            <h2 className="lato-bold text-xl tracking-wider text-blue">
              Social Networking
            </h2>
            <p className="lato-regular mt-4">
              Connect and engage with friends and the world through our social
              networking website service. Share moments, discover new
              connections, and stay updated on the latest trends in a vibrant
              online
            </p>
          </div>
        </div>
        <div>
          <img src={tutor} alt="" />
          <div className="bg-blue-100 text-center h-80 px-7 pt-7 mt-6">
            <h2 className="lato-bold text-xl tracking-wider text-blue">
              Social Networking
            </h2>
            <p className="lato-regular mt-4">
              Connect and engage with friends and the world through our social
              networking website service. Share moments, discover new
              connections, and stay updated on the latest trends in a vibrant
              online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
