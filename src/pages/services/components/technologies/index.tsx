import { useState } from "react";

import htm from "@/assets/tech/html.png";
import javascript from "@/assets/tech/JavaScript.jpeg";
import vue from "@/assets/tech/Vue-JS.jpg";
import tailwindLogo from "@/assets/tech/TailWind.jpg";
import reactjs from "@/assets/tech/ReactJS.jpg";
import next from "@/assets/tech/NextJS.jpg";
import jquery from "@/assets/tech/jQuery.jpg";
import angular from "@/assets/tech/Angular.jpg";

import php from "@/assets/tech/PHP-2048x1106.png";
import laravel from "@/assets/tech/Laravel.jpg";
import codeigniter from "@/assets/tech/CodeeIgniter.jpg";
import netcore from "@/assets/tech/net-coer.png";
import nodejs from "@/assets/tech/NodeJS.jpg";
import python from "@/assets/tech/Python.jpg";
import csharp from "@/assets/tech/C-1.jpg";
import cplus from "@/assets/tech/C.jpg";
import ruby from "@/assets/tech/Ruby.jpg";
import expressjs from "@/assets/tech/ExPressJS.jpg";

import wordpress from "@/assets/tech/WordPress.jpg";
import wix from "@/assets/tech/Wix.jpg";
import squarespace from "@/assets/tech/SquareSpace.jpg";
import shopify from "@/assets/tech/Shopify.jpg";
import opencart from "@/assets/tech/OpenCArt.jpg";
import magneto from "@/assets/tech/Magento.jpg";
import joomla from "@/assets/tech/Joomla.jpg";

import flutter from "@/assets/tech/Flutter.jpg";
import java from "@/assets/tech/Java.jpg";
import reactnative from "@/assets/tech/RN.jpg";
import kotlin from "@/assets/tech/Kotlin.jpg";
import swift from "@/assets/tech/Swift.jpg";
import objectivec from "@/assets/tech/ObjectiveC.jpg";
import ionic from "@/assets/tech/ionic.jpg";

import firebase from "@/assets/tech/FirebAse.jpg";
import mysql from "@/assets/tech/MySQL.jpg";
import mongodb from "@/assets/tech/MongoDB.jpg";

import ai from "@/assets/tech/AI.jpg";
import ps from "@/assets/tech/PS.jpg";
import xd from "@/assets/tech/XD.jpg";

const tabs = [
  {
    name: "Frontend",
    items: [htm, javascript, vue, tailwindLogo, reactjs, next, jquery, angular],
  },
  {
    name: "Backend",
    items: [
      php,
      laravel,
      codeigniter,
      netcore,
      nodejs,
      python,
      csharp,
      cplus,
      ruby,
      expressjs,
    ],
  },
  {
    name: "CMS",
    items: [wordpress, wix, squarespace, shopify, opencart, magneto, joomla],
  },
  {
    name: "Mobile",
    items: [flutter, reactnative, java, kotlin, swift, objectivec, ionic],
  },
  {
    name: "Database",
    items: [firebase, mysql, mongodb],
  },
  {
    name: "Design",
    items: [ai, ps, xd],
  },
];

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="py-28 my-container">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="lato-black text-sm tracking-widest">TECHNOLOGIES</p>
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          data-aos-offset="100"
          className="lato-black text-5xl text-blue"
        >
          Technologies We Use
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`relative pb-2 text-lg font-medium transition-colors duration-300 ${
              activeTab === tab.name
                ? "text-sky-600"
                : "text-gray-700 hover:text-sky-600"
            }`}
          >
            {tab.name}
            {activeTab === tab.name && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-600"></span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 place-items-center">
        {tabs
          .find((tab) => tab.name === activeTab)
          ?.items.map((img, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-200 h-200 bg-white shadow-md rounded-xl p-4 transform transition duration-500 hover:scale-110"
            >
              <img
                src={img}
                alt="tech"
                className="max-w-[200px] max-h-[200px] object-contain"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
