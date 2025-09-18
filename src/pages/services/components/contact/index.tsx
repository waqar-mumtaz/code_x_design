import contact_us from "@/assets/imgs/contact_us.jpeg";

const ContactSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[80vh] lg:h-[70vh] mt-5">
      <img
        className="w-full h-full object-cover"
        src={contact_us}
        alt="Contact"
      />
      <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center bg-black/40">
        <div>
          <p className="uppercase lato-bold tracking-wider text-center text-white">
            Appointment
          </p>
          <h1 className="lato-black text-5xl text-blue">
            Start Your Project With Us
          </h1>
        </div>
        <button className="py-2 px-6 bg-white rounded-md flex gap-2 hover:text-white hover:bg-black transition-colors duration-500">
          Contact Us <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
