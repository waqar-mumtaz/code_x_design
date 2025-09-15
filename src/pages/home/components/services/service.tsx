import React from "react";

interface ServiceProps {
  title: string;
  icon: string;
  active?: boolean;
  description: string;
}
const Service: React.FC<ServiceProps> = ({
  title,
  description,
  icon,
  active = false,
}) => {
  if (active) {
    return (
      <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 bg-sky-600  hover:bg-white transition-colors duration-500 hover:border-sky-600">
        <i
          className={`${icon} text-5xl text-white group-hover:text-sky-600  transition-colors duration-500`}
        ></i>
        <h2 className="lato-regular text-lg mt-2 text-white group-hover:text-black transition-colors duration-500">
          {title}
        </h2>
        <p className="lato-regular text-white my-3 group-hover:text-black transition-colors duration-500">
          {description}
        </p>
        <div className=" text-white mt-5 group-hover:text-sky-600 transition-colors duration-500">
          <input type="button" />
          View
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
      <i
        className={`${icon} text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500`}
      ></i>
      <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
        {title}
      </h2>
      <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
        {description}
      </p>
      <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
    </div>
  );
};

export default Service;
