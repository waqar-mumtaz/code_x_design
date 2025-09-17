import React from "react";
import planning from "@/assets/imgs/planning.png";

const WorkingProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Planning",
      description:
        "We start by diving deep into your vision and creating a clear strategy.",
      icon: planning,
      bgColor: "bg-blue",
      iconBg: "bg-blue",
    },
    {
      id: 2,
      title: "Development",
      description:
        "Our team gets to work, building your project step by step with care and precision.",
      icon: planning, // Using same icon for now
      bgColor: "bg-gray-800",
      iconBg: "bg-gray-800",
    },
    {
      id: 3,
      title: "Testing",
      description:
        "We check everything to make sure it runs perfectly and meets your expectations.",
      icon: planning, // Using same icon for now
      bgColor: "bg-blue",
      iconBg: "bg-blue",
    },
    {
      id: 4,
      title: "Launch",
      description:
        "Time to shine! We deliver your project, ready to impress and make an impact.",
      icon: planning, // Using same icon for now
      bgColor: "bg-gray-800",
      iconBg: "bg-gray-800",
    },
  ];

  return (
    <section className="py-32">
      <div className="my-container">
        <div className="text-center mb-16">
          <h5 className="lato-bold tracking-wider text-sm text-gray-600 mb-4">
            OUR PROCESS
          </h5>
          <h1 className="text-5xl lato-black text-blue tracking-wider">
            Our Working Process
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center  bg-blue-100 p-10 rounded-lg"
            >
              <div className="relative mb-6">
                <div
                  className={`${step.iconBg} inline-flex justify-center items-center p-8 rounded-lg shadow-lg`}
                >
                  <img className="w-12 h-12" src={step.icon} alt={step.title} />
                </div>
                <span className="absolute -top-2 -right-2 bg-blue border-4 border-white rounded-full text-white w-8 h-8 flex items-center justify-center lato-black text-sm">
                  {step.id}
                </span>
              </div>

              <h3 className="text-xl lato-bold text-blue mb-3">{step.title}</h3>

              <p className="text-gray-600 lato-regular leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
