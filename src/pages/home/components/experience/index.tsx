import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { experienceData } from "@/assets/data";

const Experience = () => {
  return (
    <section className="my-container">
      <div className="text-center">
        <h5 className="lato-bold tracking-wider text-sm">AREAS OF EXPERTISE</h5>
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
          data-aos-offset="100"
          className="text-5xl lato-black text-blue tracking-wider"
        >
          Industry Experience
        </h1>
      </div>

      {/* Swiper Carousel */}
      <div className="mt-12 relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {experienceData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <div className="bg-blue-100 text-center h-80 px-7 pt-7 mt-6">
                  <h2 className="lato-bold text-xl tracking-wider text-blue">
                    {item.title}
                  </h2>
                  <p className="lato-regular mt-4">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Experience;
