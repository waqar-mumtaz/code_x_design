import { motion } from "motion/react";
import img from "../../assets/imgs/services.jpg";

const Services = () => {
  return (
    <div>
      <section className="relative w-full h-[90vh] md:h-[80vh] lg:h-[50vh] mt-5">
        <img className="w-full h-full object-cover" src={img} alt="Services" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Services
          </h1>
        </div>
      </section>
      {/* Section 02 */}
      <section className="mt-5 md:mt-20">
        <div className="text-center mb-10">
          <h5 className="lato-black text-sm tracking-widest">WHAT WE DO</h5>
          <motion.h1
            className="lato-black text-5xl text-blue"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.h1>
        </div>
        <div className="md:grid  md:grid-cols-4 gap-5 grid-cols-none my-container">
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-computer text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              Web Development
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Building modern, responsive websites tailored to your needs.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-mobile-screen-button text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              Mobile App Development
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Creating user-friendly apps for Android and iOS.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-laptop text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              Web App Development
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Developing dynamic, scalable web applications.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-paintbrush text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              UI/UX Designing
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Crafting intuitive designs that enhance user experience.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-magnifying-glass text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              Search Engine Optimization
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Boosting your website’s visibility on search engines.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-chart-simple text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              Digital Marketing
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Implementing effective strategies to grow your brand online.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-chart-pie text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              Graphic Designing
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Creating captivating visuals that make an impact.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-user-group text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              Social Media Marketing
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-file-video text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              Video Editing
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
          <div className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-server text-5xl text-sky-600 group-hover:text-white  transition-colors duration-500"></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              Server Management
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis.
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
