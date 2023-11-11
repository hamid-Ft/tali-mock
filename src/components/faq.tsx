import Image from "next/image";
import React, { useState } from "react";

type FAQ = {
  question: string;
  renderAnswer: () => JSX.Element;
};

const FAQ: React.FC<FAQ> = ({ question, renderAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="cursor-pointer" onClick={toggleAnswer}>
      <div className="justify-start text-start mt-6 cursor-pointer flex max-w-2xl">
        <div className="mt-[5px] mr-2 grid grid-cols-[16px_1fr] justify-start items-center">
          {showAnswer ? (
            <Image
              alt="arrow-down"
              loading="lazy"
              width="17"
              height="10"
              decoding="async"
              data-nimg="1"
              src="https://tali.ai/_next/static/media/caret_open.215b3b4e.svg"
            />
          ) : (
            <Image
              alt="arrow-right"
              loading="lazy"
              width="10"
              height="17"
              decoding="async"
              data-nimg="1"
              src="https://tali.ai/_next/static/media/caret_closed.4d5b8376.svg"
            />
          )}
        </div>
        <h4 className="text-black font-inter text-[21px] font-semibold leading-[26px]">
          {question}
        </h4>
      </div>
      {showAnswer && renderAnswer()}
      <div className="flex justify-center items-center w-full">
        <div className="w-full mt-6 h-0 border border-[#e9e6ec]"></div>
      </div>
    </div>
  );
};

export default FAQ;
