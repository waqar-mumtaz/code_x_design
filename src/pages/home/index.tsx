import logistics from "../../assets/imgs/Logistics.png";
import realestate from "../../assets/imgs/realestate.png";
import fitness from "../../assets/imgs/Fitness.png";
import travel from "../../assets/imgs/travel.png";
import social from "../../assets/imgs/social.png";
import ecommerce from "../../assets/imgs/ecommerce.png";
import tutor from "../../assets/imgs/Tutor.png";
import haider from "../../assets/imgs/haider.webp";
import hS_products from "../../assets/imgs/HS-Products-1-1.png";
import almunnaf from "../../assets/imgs/almunnaf.png";
import mushtaq from "../../assets/imgs/mushtaq.webp";
import budget_blaze from "../../assets/imgs/Budget-Blaze.png";
import bblaze from "../../assets/imgs/BBlaze.png";
import planning from "../../assets/imgs/planning.png";
import Banner from "./components/banner";
import Services from "./components/services";
import Acheivements from "./components/acheivements";

const Home = () => {
  return (
    <div className="my-container">
      <Banner />
      <Services />
      <Acheivements />

      <section>
        <div className="text-center">
          <h5 className="lato-bold tracking-wider text-sm">
            AREAS OF EXPERTISE
          </h5>
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
                Our travel website service offers a one-stop solution for all
                your travel needs. From flight and hotel bookings to destination
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

      <section className="mt-28">
        <div className="text-center">
          <h5 className="lato-black tracking-widest text-sm">
            SEE WHAT WE WORK
          </h5>
          <h1 className="text-5xl lato-black text-blue tracking-wider">
            Our Latest Work
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-6 py-9">
          <div>
            <h5 className="lato-bold">eCommerce Store</h5>
            <h1 className="lato-black text-4xl text-blue">
              HS Products Website
            </h1>
            <p className="text-gray-600 lato-regular text-base">
              HS Products is Online Store selling Door Handles in United
              Kingdom. This website is build using WordPress CMS with the help
              of Page Builder.
            </p>
            <p className="lato-bold-italic text-gray-400 text-center px-16 text-lg py-8">
              Thank you for delivering an exceptional eCommerce website for HS
              Products. The design is clean, the navigation is intuitive, and it
              perfectly showcases our product range. You made the entire process
              smooth and efficient.
            </p>
            <div className="flex items-center gap-5 justify-center">
              <img className="w-12 rounded-full" src={haider} alt="" />
              <h5 className="text-gray-500 lato-bold text-sm">
                Haider Shahzad
              </h5>
            </div>
          </div>
          <div>
            <img src={hS_products} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 py-9">
          <div>
            <img src={almunnaf} alt="" />
          </div>
          <div>
            <h5 className="lato-bold">Business Website</h5>
            <h1 className="lato-black text-4xl text-blue">
              Al Munnaf Services
            </h1>
            <p className="text-gray-600 lato-regular text-base">
              Al Munnaf Traders is a Construction Company working in different
              countries. This website is build using WordPress CMS with the help
              of Page Builder.
            </p>
            <p className="lato-bold-italic text-gray-400 text-center px-14 text-lg py-8">
              We couldn’t be happier with the website developed for ALMUNNAF. It
              perfectly represents our services with a professional and
              user-friendly design. The team understood our vision and delivered
              beyond expectations.
            </p>
            <div className="flex items-center gap-5 justify-center">
              <img className="w-12 rounded-full" src={mushtaq} alt="" />
              <h5 className="text-gray-500 lato-bold text-sm">Engr. Mushtaq</h5>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 py-9">
          <div>
            <h5 className="lato-bold">Finance Application</h5>
            <h1 className="lato-black text-4xl text-blue">Budget Blaze</h1>
            <p className="text-gray-600 lato-regular text-base">
              Budget Blaze is a Finance Application used to manage your income
              and expenses. This App is develop using Flutter and Firebase.
            </p>
            <p className="lato-bold-italic text-gray-400 text-center px-12 text-lg py-6">
              The mobile application you developed for Budget Blaze is
              outstanding. The intuitive design and smooth functionality make
              tracking income and expenses effortless for users.
            </p>
            <div className="flex items-center gap-5 justify-center">
              <img className="w-12 rounded-full" src={bblaze} alt="" />
              <h5 className="text-gray-500 lato-bold text-sm">M Usama</h5>
            </div>
          </div>
          <div>
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
