import planning from "../../assets/imgs/planning.png";
import Banner from "./components/banner";
import Services from "./components/services";
import Achievements from "./components/achievements";
import Experience from "./components/experience";
import OurWorks from "./components/our-works";
import mushtaq from "@/assets/imgs/mushtaq.webp";

const Home = () => {
  return (
    <div className="my-container">
      <Banner />
      <Services />
      <Achievements />
      <Experience />
      <OurWorks />
      <section>
        <div className="text-center">
          <h5 className="lato-black tracking-widest text-sm">OUR PROCESS</h5>
          <h1 className="text-5xl lato-black text-blue tracking-wider">
            Our Working Process
          </h1>
        </div>
        <div className="grid grid-cols-4">
          <div className=" inline-block">
            <div className="relative  bg-blue inline-flex justify-center p-10 rounded-lg">
              <img className="w-12" src={planning} alt="" />
            </div>
            <span className="absolute top-2 bg-blue border-4 border-gray-100 rounded-full text-white px-2 lato-black text-sm">
              1
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center">
          <h5 className="lato-black tracking-widest text-sm">TESTIMONALS</h5>
          <h1 className="text-5xl lato-black text-blue tracking-wider">
            What Our Clients Says
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-14 pt-16 pb-24 border-gray-200 shadow-lg shadow-gray-200/30">
            <img className="w-20 rounded-full" src={mushtaq} alt="" />
            <div className="my-4">
              <h2 className="lato-bold text-xl tracking-wider">ENGR MUHSTAQ</h2>
              <p className="text-xs tracking-wider">AL MUNNAF</p>
            </div>
            <p className="text-gray-500 lato-regular text-justify pr-5 text-sm">
              We couldn't be happier with the website developed for ALMUNNAF. It
              perfectly represents our services with a professional and
              user-friendly design. The team understood our vision and delivered
              beyond expectations.
            </p>
            <div className="text-blue mt-2">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
