import React from "react";

const LandingHero : React.FC = () => {
    return (
        <div className="w-full relative z-20 px-8 py-16 md:px-12 lg:px-20 xl:px-36 2xl:px-60 bg-transparent">
          <h2 className="font-bold flex flex-col max-w-md text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-normal mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
            <span>Did you know that</span>{" "}
            <span className="text-5xl lg:text-7xl text-themeOrange">
              32 million
            </span>{" "}
            <span>Americans have food allergies?</span>
          </h2>
          <p className="font-medium md:text-lg lg:text-xl xl:text-2xl mb-2">
            Learn more about food allergies today!
          </p>
          <button className="px-3 py-2 border-2 border-themeOrange text-themeOrange font-medium md:text-lg lg:text-xl transition-all hover hover:text-themeYellow hover:border-themeYellow cursor-pointer">
            Browse Free Courses
          </button>
        </div>
    )
};

export default LandingHero;