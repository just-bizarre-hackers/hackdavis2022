/**
 * @import react
 */
import React from "react";

const OurMissionAndPurpose: React.FC = () => {
  return (
    <div className="w-full">
      <article className="w-full border-2 z-10 relative" />
      <h3 className="relative font-bold -top-5 z-20 text-3xl pr-16 bg-white lg:w-max max-w-screen">
        Our Mission and Purpose
      </h3>
      <p className="leading-loose lg:w-1/2 my-6 lg:px-8">
        We normally do not perceive food allergy as dangerous as it actually
        does, if not responded late or inaccurately. In order to bring awareness
        and inform more about food allergies, we strive to educate people about
        food allergies in a fun and interactive way. Our courses are informative
        yet concise, which helps the audience engage with the course material
        for a longer duration and with higher concentration.
      </p>
      <p className="leading-loose lg:w-1/2 lg:px-8">
        We hope to inform as many people as possible in order to prevent
        possible reactions, as well as educate those who are related to people
        who have food allergies.
      </p>
    </div>
  );
};

export default OurMissionAndPurpose;
