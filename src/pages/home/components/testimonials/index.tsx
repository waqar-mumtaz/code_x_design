import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { testimonialsData } from "@/assets/data";

const Testimonials = () => {
  return (
    <section className="py-20 my-container">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="lato-black tracking-widest text-sm">TESTIMONIALS</p>
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          data-aos-offset="100"
          className="text-5xl lato-black text-blue tracking-wider"
        >
          What Our Clients Says
        </h1>
      </div>

      {/* Swiper Testimonials */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            nextEl: ".testimonials-next",
            prevEl: ".testimonials-prev",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-full">
              <div className="h-full px-14 pt-16 pb-24 border border-transparent border-b-blue-600 hover:border-pink-100 hover:border-b-blue-600 transition-colors duration-500 bg-white shadow-lg rounded-lg flex flex-col">
                <img
                  className="w-20 h-20 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="mt-7 mb-4">
                  <h2 className="lato-bold text-xl tracking-wider uppercase hover:text-blue">
                    {testimonial.name}
                  </h2>
                  <p className="text-xs tracking-wider uppercase">
                    {testimonial.company}
                  </p>
                </div>
                <p className="text-gray-500 lato-regular text-justify text-sm flex-grow">
                  {testimonial.testimonial}
                </p>
                <div className="text-blue mt-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons - only visible on md and above */}
        <button className="testimonials-prev hidden md:block absolute -left-12 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl font-normal hover:opacity-70 transition-opacity z-10">
          ←
        </button>

        <button className="testimonials-next hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl font-normal hover:opacity-70 transition-opacity z-10">
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
