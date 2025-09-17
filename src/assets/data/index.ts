import logistics from "@/assets/imgs/Logistics.png";
import realestate from "@/assets/imgs/realestate.png";
import fitness from "@/assets/imgs/Fitness.png";
import travel from "@/assets/imgs/travel.png";
import social from "@/assets/imgs/social.png";
import ecommerce from "@/assets/imgs/ecommerce.png";
import tutor from "@/assets/imgs/Tutor.png";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Our Work",
    path: "/our-work",
  },
  {
    name: "Our Team",
    path: "/our-team",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export const bannerText = {
  prefix: "With Our Excellent Team",
  title: "We Build The Best Designs",
  description:
    "Our team blends creativity and innovation to deliver stunning results. From concept to completion, we ensure every detail is perfect. Let us bring your vision to life with designs that inspire and captivate.",
};

export const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Building modern, responsive websites tailored to your needs.",
    icon: "fa-solid fa-computer",
    active: false,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Creating user-friendly apps for Android and iOS.",
    icon: "fa-solid fa-mobile-screen-button",
    active: false,
  },
  {
    id: 3,
    title: "Web App Development",
    description: "Developing dynamic, scalable web applications.",
    icon: "fa-solid fa-laptop",
    active: false,
  },
  {
    id: 4,
    title: "UI/UX Designing",
    description: "Crafting intuitive designs that enhance user experience.",
    icon: "fa-solid fa-paintbrush",
    active: false,
  },
  {
    id: 5,
    title: "Search Engine Optimization",
    description: "Boosting your website's visibility on search engines.",
    icon: "fa-solid fa-magnifying-glass",
    active: false,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Implementing effective strategies to grow your brand online.",
    icon: "fa-solid fa-chart-simple",
    active: false,
  },
  {
    id: 7,
    title: "Graphic Designing",
    description: "Creating captivating visuals that make an impact.",
    icon: "fa-solid fa-chart-pie",
    active: false,
  },
  {
    id: 8,
    title: "More Services",
    description: "Explore all our offerings on the services page.",
    icon: "fa-solid fa-braille",
    active: true,
  },
];

export const experienceData = [
  {
    id: 1,
    image: logistics,
    title: "Logistics",
    description:
      "Our logistics website service streamlines the movement of goods. From efficient supply chain management to tracking shipments, we optimize logistics processes for businesses, ensuring seamless transportation and delivery solutions.",
  },
  {
    id: 2,
    image: realestate,
    title: "Real Estate",
    description:
      "Discover your dream home with our real estate website service. Explore property listings, connect with agents, and find the perfect place to call your own. Your ideal home is just a click away.",
  },
  {
    id: 3,
    image: fitness,
    title: "Health & Fitness",
    description:
      "Elevate your well-being with our health and fitness website service. Access workouts, nutrition guidance, and expert tips to achieve your fitness goals and lead a healthier, happier life.",
  },
  {
    id: 4,
    image: travel,
    title: "Travel & Hotel",
    description:
      "Our travel website service offers a one-stop solution for all your travel needs. From flight and hotel bookings to destination guides, we make your journey a seamless and unforgettable experience.",
  },
  {
    id: 5,
    image: social,
    title: "Social Networking",
    description:
      "Connect and engage with friends and the world through our social networking website service. Share moments, discover new connections, and stay updated on the latest trends in a vibrant online community.",
  },
  {
    id: 6,
    image: ecommerce,
    title: "E-commerce",
    description:
      "Transform your business with our e-commerce website service. Create stunning online stores, manage inventory, process payments, and provide exceptional shopping experiences for your customers.",
  },
  {
    id: 7,
    image: tutor,
    title: "Education & Tutoring",
    description:
      "Enhance learning experiences with our education and tutoring website service. Connect students with expert tutors, access interactive learning materials, and achieve academic success through personalized guidance.",
  },
];
