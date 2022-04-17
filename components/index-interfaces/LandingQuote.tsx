import React from "react";

const LandingQuote: React.FC = () => {
  return (
    <div className="z-20 px-8 py-16 md:px-12 lg:px-20 xl:px-36 2xl:px-60 bg-themeYellow bg-opacity-80 md:flex flex-col">
      <blockquote className="w-full md:self-end md:w-max py-8 md:py-16 lg:py-24 text-right flex flex-col">
        <span className="text-6xl font-bold self-start">&#x201C;</span>{" "}
        <span className="md:self-end w-full md:w-max font-medium text-xl md:text-2xl lg:text-3xl flex flex-col">
          <span>
            <span className="">
              <span className="text-5xl ">1</span> in{" "}
              <span className="text-6xl font-bold">10</span>
            </span> adults and{" "}
            <span className="">
              <span className="text-5xl">1</span> in{" "}
              <span className="text-6xl font-bold">13</span>{" "}
            </span>
            children
          </span>
          <span>in the United States have food allergies.</span>
        </span>{" "}
        <span className="text-6xl font-bold">&#x201D;</span>
        <code className="font-mali text-xl italic">- Foodallergy.org</code>
      </blockquote>
    </div>
  );
};

export default LandingQuote;
