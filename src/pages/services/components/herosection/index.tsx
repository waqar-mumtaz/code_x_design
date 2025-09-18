import img from "@/assets/imgs/services.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[80vh] lg:h-[50vh] mt-5">
      <img className="w-full h-full object-cover" src={img} alt="Services" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-white text-3xl md:text-5xl font-bold">Services</h1>
      </div>
    </section>
  );
};

export default HeroSection;
