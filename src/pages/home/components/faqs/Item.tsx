import React from "react";

interface FaqItemProps {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="overflow-hidden">
      <button
        className="w-full text-left flex items-center justify-between hover:opacity-80 transition-opacity duration-200"
        onClick={() => onToggle(id)}
      >
        <div className="flex items-center space-x-4">
          <div className="bg-blue rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-110">
            <span className="text-white text-lg font-bold transition-transform duration-200">
              {isOpen ? "−" : "+"}
            </span>
          </div>
          <h3 className="text-white lato-bold text-lg">{question}</h3>
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <p className="text-gray-300 lato-regular leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
