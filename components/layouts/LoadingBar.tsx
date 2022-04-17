/**
 * @import react
 */
import React from "react";

interface loadingBarProps {
  id: string;
}
const LoadingBar: React.FC<loadingBarProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="fixed z-40 top-0 w-full min-h-screen flex flex-col justify-center items-center"
    >
      <section>
        <p className="font-mali font-medium text-2xl md:text-3xl lg:text-4xl text-center mb-6 lg:mb-12 animate-pulse text-white">
          Loading
        </p>
        <ul id="loading-bar" className="flex space-x-6 lg:space-x-8">
          <span className="rounded-full shadow-xl w-6 h-6 lg:w-8 lg:h-8 bg-themeBlue"></span>
          <span className="rounded-full shadow-xl w-6 h-6 lg:w-8 lg:h-8 bg-themeNavy"></span>
          <span className="rounded-full shadow-xl w-6 h-6 lg:w-8 lg:h-8 bg-themeYellow"></span>
          <span className="rounded-full shadow-xl w-6 h-6 lg:w-8 lg:h-8 bg-themeGreen"></span>
          <span className="rounded-full shadow-xl w-6 h-6 lg:w-8 lg:h-8 bg-themeOrange"></span>
        </ul>
      </section>
    </section>
  );
};

export default LoadingBar;
