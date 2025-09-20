const ContactForm = () => {
  return (
    <section className="mt-10 md:mt-52 mb-24 my-container">
      <div className=" md:flex gap-10 items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="text-center md:text-start"
        >
          <p className="lato-black tracking-widest text-sm uppercase">
            Say Hi to us
          </p>
          <h1 className="text-5xl lato-black text-blue tracking-wider">
            Lets Talk!
          </h1>
          <p className="text-gray-600 py-2">
            If you are considering one of our products, fill in the form. If you
            need to get in touch with a sales person right now, call us at
          </p>
          <div className="flex justify-center md:justify-start gap-2 items-center mt-8">
            <i className="fa-solid fa-phone text-blue text-lg "></i>
            <span className="lato-bold text-lg">+92 312 0594144</span>
          </div>
        </div>
        <form
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          action=""
          className="flex flex-col gap-4 mt-14"
        >
          <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-2">
            <input
              className="bg-gray-100 w-full md:w-auto rounded-md py-2 pl-4 pr-20 border border-transparent focus:border-gray-300
           focus:outline-none transition duration-300 ease-in-out"
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-gray-100 w-full md:w-auto rounded-md py-2 pl-4 pr-20 border border-transparent focus:border-gray-300
           focus:outline-none transition duration-300 ease-in-out"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-2">
            <input
              className="bg-gray-100 w-full rounded-md py-2 pl-4 pr-20 border border-transparent focus:border-gray-300
           focus:outline-none transition duration-300 ease-in-out"
              type="text"
              placeholder="Email"
            />
            <input
              className="bg-gray-100 w-full rounded-md py-2 pl-4 pr-20 border border-transparent focus:border-gray-300
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
  );
};

export default ContactForm;
