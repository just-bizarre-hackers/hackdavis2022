/**
 * @import react
 */
import React from "react";

const LandingQuote: React.FC = () => {
  return (
    <div className="z-20 px-8 py-16 md:px-12 lg:px-20 xl:px-36 2xl:px-60 bg-themeYellow bg-opacity-80 md:flex flex-col">
      <blockquote className="w-full md:self-end md:w-max py-8 md:py-16 lg:py-24 text-right flex flex-col">
        <span className="text-6xl font-bold self-start">&#x201C;</span>{" "}
        <span className="md:self-end w-full md:w-max font-medium text-xl md:text-2xl lg:text-3xl flex flex-col">
          <span>
            <span className="">
              <span className="inline-block">
                <span className="text-5xl ">1</span> in{" "}
                <span className="text-6xl font-bold">10</span>
              </span>{" "}
              adults
            </span>{" "}
            and{" "}
            <span>
              <span className="inline-block">
                <span className="text-5xl">1</span> in{" "}
                <span className="text-6xl font-bold">13</span>{" "}
              </span>
              children
            </span>
          </span>
          <span>in the United States have food allergies.</span>
        </span>{" "}
        <span className="text-6xl font-bold">&#x201D;</span>
        <code className="font-mali text-xl italic">- Foodallergy.org</code>
      </blockquote>
      <div className="relative w-full h-full flex flex-col justify-center items-center space-y-2">
        <img
          className="relative  z-20 w-full top-1/2 left-1/2 transform -transalte-y-1/2 -translate-x-1/2"
          src="/white_board_background.png"
          alt=""
        />
        <article className=" z-30 w-10/12 text-themeOrange font-mali flex flex-col items-center absolute">
          <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-8 lg:mb-12 xl:mb-16">
            Why Use Our Platform?
          </h2>
          <p className="font-medium text-sm md:text-lg lg:text-xl xl:text-2xl">
            1) Learn what an allergy is and spread awareness
          </p>
          <p className="font-medium text-sm md:text-lg lg:text-xl xl:text-2xl my-1 md:my-2 lg:my-4 xl:my-8">
            2) Learn how to respond in allergy reaction emergencies
          </p>
          <p className="font-medium text-sm md:text-lg lg:text-xl xl:text-2xl">
            3) Learn how to cope with such conditions with happiness!
          </p>
        </article>
      </div>
    </div>
  );
};

export default LandingQuote;
