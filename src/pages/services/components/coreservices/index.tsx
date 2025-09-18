const services = [
  {
    icon: "fa-solid fa-computer",
    title: "Web Development",
    desc: "Building modern, responsive websites tailored to your needs.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile App Development",
    desc: "Creating user-friendly apps for Android and iOS.",
  },
  {
    icon: "fa-solid fa-laptop",
    title: "Web App Development",
    desc: "Developing dynamic, scalable web applications.",
  },
  {
    icon: "fa-solid fa-paintbrush",
    title: "UI/UX Designing",
    desc: "Crafting intuitive designs that enhance user experience.",
  },
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "Search Engine Optimization",
    desc: "Boosting your website’s visibility on search engines.",
  },
  {
    icon: "fa-solid fa-chart-simple",
    title: "Digital Marketing",
    desc: "Implementing effective strategies to grow your brand online.",
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Graphic Designing",
    desc: "Creating captivating visuals that make an impact.",
  },
  {
    icon: "fa-solid fa-user-group",
    title: "Social Media Marketing",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
  },
  {
    icon: "fa-solid fa-file-video",
    title: "Video Editing",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Server Management",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
  },
];

const CoreServices = () => {
  return (
    <section className="mt-10 md:mt-20 md:mb-24">
      <div className="text-center mb-10">
        <p className="lato-black text-sm tracking-widest">WHAT WE DO</p>
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          data-aos-offset="100"
          className="lato-black text-5xl text-blue"
        >
          Our Core Services
        </h1>
      </div>

      <div className="grid md:grid-cols-4 gap-5 my-container">
        {services.map((service, i) => (
          <div
            key={i}
            className="group border-2 border-gray-50 rounded-md text-center px-3 py-7 hover:bg-sky-600 hover:text-white transition-colors duration-500"
          >
            <i
              className={`${service.icon} text-5xl text-sky-600 group-hover:text-white transition-colors duration-500`}
            ></i>
            <h2 className="lato-regular text-lg mt-2 group-hover:text-white transition-colors duration-500">
              {service.title}
            </h2>
            <p className="lato-regular text-gray-600 my-3 group-hover:text-white transition-colors duration-500">
              {service.desc}
            </p>
            <i className="fa-solid fa-arrow-right text-sky-600 mt-5 group-hover:text-white transition-colors duration-500"></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
