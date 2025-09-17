import Banner from "./components/banner";
import Services from "./components/services";
import Achievements from "./components/achievements";
import Experience from "./components/experience";
import OurWorks from "./components/our-works";
import mushtaq from "@/assets/imgs/mushtaq.webp";
import aysha_logo from "@/assets/imgs/aysha_logo.png";
import haider_logo from "@/assets/imgs/haider_logo.png";
import ali_logo from "@/assets/imgs/ali_logo.png";
import asfi_logo from "@/assets/imgs/asfi_logo.jpg";
import hammad_logo from "@/assets/imgs/hammad_logo.jpeg";
import WorkingProcess from "./components/working-process";
import Faqs from "./components/faqs";

const Home = () => {
  return (
    <>
      <div className="my-container">
        <Banner />
        <Services />
        <Achievements />
        <Experience />
        <OurWorks />
        <WorkingProcess />
      </div>
      <Faqs />
      <div className="my-container">
        <section>
          <div className="text-center">
            <p className="lato-black tracking-widest text-sm">TESTIMONALS</p>
            <h1 className="text-5xl lato-black text-blue tracking-wider">
              What Our Clients Says
            </h1>
          </div>
          <div className="grid grid-cols-2 mb-6 gap-10">
            <div className="px-14 pt-16 pb-24 border border-transparent border-b-blue-600 hover:border-pink-100 hover:border-b-blue-600 transition-colors duration-500">
              <img className="w-20 rounded-full" src={mushtaq} alt="" />
              <div className="mt-7 mb-4 ">
                <h2 className="lato-bold text-xl tracking-wider uppercase hover:text-blue">
                  engr mushtaq
                </h2>
                <p className="text-xs tracking-wider uppercase">al munnaf</p>
              </div>
              <p className="text-gray-500 lato-regular text-justify  text-sm">
                We couldn't be happier with the website developed for ALMUNNAF.
                It perfectly represents our services with a professional and
                user-friendly design. The team understood our vision and
                delivered beyond expectations.
              </p>
              <div className="text-blue mt-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="px-14 pt-16 pb-24 border border-transparent border-b-blue-600 hover:border-pink-100 hover:border-b-blue-600 transition-colors duration-500">
              <img className="w-20 rounded-full" src={aysha_logo} alt="" />
              <div className="mt-7 mb-4 ">
                <h2 className="lato-bold text-xl tracking-wider uppercase group-hover:text-blue-500">
                  miss aysha
                </h2>
                <p className="text-xs tracking-wider uppercase">
                  am design-build
                </p>
              </div>
              <p className="text-gray-500 lato-regular text-justify pr-5 text-sm">
                The website you created for AM Design-Build is nothing short of
                amazing. It's sleek, functional, and truly highlights our
                expertise in design and construction. Your attention to detail
                and commitment to excellence have made this project a success.
              </p>
              <div className="text-blue mt-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="px-14 pt-16 pb-24 border border-transparent border-b-blue-600 hover:border-pink-100 hover:border-b-blue-600 transition-colors duration-500">
              <img className="w-20 rounded-full" src={haider_logo} alt="" />
              <div className="mt-7 mb-4 ">
                <h2 className="lato-bold text-xl tracking-wider uppercase group-hover:text-blue-500">
                  haider shahzad
                </h2>
                <p className="text-xs tracking-wider uppercase">hs products</p>
              </div>
              <p className="text-gray-500 lato-regular text-justify pr-5 text-sm">
                Thank you for delivering an exceptional eCommerce website for HS
                Products. The design is clean, the navigation is intuitive, and
                it perfectly showcases our product range. You made the entire
                process smooth and efficient.
              </p>
              <div className="text-blue mt-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="px-14 pt-16 pb-24 border border-transparent border-b-blue-600 hover:border-pink-100 hover:border-b-blue-600 transition-colors duration-500">
              <img className="w-20 rounded-full" src={ali_logo} alt="" />
              <div className="mt-7 mb-4 ">
                <h2 className="lato-bold text-xl tracking-wider uppercase group-hover:text-blue-500">
                  mr ali
                </h2>
                <p className="text-xs tracking-wider uppercase">
                  world bank notes hub
                </p>
              </div>
              <p className="text-gray-500 lato-regular text-justify pr-5 text-sm">
                The eCommerce platform you developed for us is outstanding. It's
                visually appealing, easy to use, and has enhanced our customer
                experience significantly. We are thrilled with the result and
                grateful for your hard work.
              </p>
              <div className="text-blue mt-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="px-14 pt-16 pb-24 border border-transparent border-b-blue-600 hover:border-pink-100 hover:border-b-blue-600 transition-colors duration-500">
              <img className="w-20 rounded-full" src={asfi_logo} alt="" />
              <div className="mt-7 mb-4 ">
                <h2 className="lato-bold text-xl tracking-wider uppercase group-hover:text-blue-500">
                  asif awan
                </h2>
                <p className="text-xs tracking-wider uppercase">
                  online bechdo
                </p>
              </div>
              <p className="text-gray-500 lato-regular text-justify pr-5 text-sm">
                The classified ads website you developed for Online Bechdo is
                absolutely fantastic. It's user-friendly, visually appealing,
                and perfectly tailored to our needs. The platform has made it so
                much easier for users to buy and sell online.
              </p>
              <div className="text-blue mt-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="px-14 pt-16 pb-24 border border-transparent border-b-blue-600 hover:border-pink-100 hover:border-b-blue-600 transition-colors duration-500">
              <img className="w-20 rounded-full" src={hammad_logo} alt="" />
              <div className="mt-7 mb-4 ">
                <h2 className="lato-bold text-xl tracking-wider uppercase group-hover:text-blue-500">
                  muhammad hammad
                </h2>
                <p className="text-xs tracking-wider uppercase">
                  innvotek pharma
                </p>
              </div>
              <p className="text-gray-500 lato-regular text-justify pr-5 text-sm">
                The website developed for Innvotek Pharma beautifully captures
                our company's mission and professionalism. It's informative,
                user-friendly, and designed with precision to meet the needs of
                our industry.
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
        <section className="mt-52 mb-24">
          <div className=" md:flex gap-10 items-center">
            <div className="text-center md:text-start">
              <p className="lato-black tracking-widest text-sm uppercase">
                Say Hi to us
              </p>
              <h1 className="text-5xl lato-black text-blue tracking-wider">
                Lets Talk!
              </h1>
              <p className="text-gray-600 py-2">
                If you are considering one of our products, fill in the form. If
                you need to get in touch with a sales person right now, call us
                at
              </p>
              <div className="flex justify-center md:justify-start gap-2 items-center mt-8">
                <i className="fa-solid fa-phone text-blue text-lg "></i>
                <span className="lato-bold text-lg">+92 312 0594144</span>
              </div>
            </div>
            <form action="" className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  className="bg-gray-100 rounded-md py-2 pl-4 pr-20 border border-transparent focus:border-gray-300
                 focus:outline-none transition duration-300 ease-in-out"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="bg-gray-100 rounded-md py-2 pl-4 pr-20 border border-transparent focus:border-gray-300
                 focus:outline-none transition duration-300 ease-in-out"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-2">
                <input
                  className="bg-gray-100 rounded-md py-2 pl-4 pr-20 border border-transparent focus:border-gray-300
                 focus:outline-none transition duration-300 ease-in-out"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="bg-gray-100 rounded-md py-2 pl-4 pr-20 border border-transparent focus:border-gray-300
                 focus:outline-none transition duration-300 ease-in-out"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <select
                className="w-full border  rounded-md px-4 py-2 
                   bg-gray-100 text-gray-500 focus:outline-none focus:border-gray-300 
                   transition duration-300"
              >
                <option>Inquiring About</option>
                <option>Website Development</option>
                <option>Mobile Application Development</option>
                <option>Web App Development</option>
                <option>UI/UX Designing</option>
                <option>SEO</option>
                <option>Social Media Marketing</option>
                <option>Server Management</option>
                <option>Other</option>
              </select>
              <textarea
                className="bg-gray-100 w-full pl-4 pt-1 pb-5 rounded-md border border-transparent focus:border-gray-300
                 focus:outline-none transition duration-300 ease-in-out"
                name="text"
                id="text"
                placeholder="Project Short Description"
              ></textarea>
              <button className="bg-blue uppercase w-full py-3 rounded-md text-white hover:bg-blue-700">
                submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
