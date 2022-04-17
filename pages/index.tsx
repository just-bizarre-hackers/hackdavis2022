import { NextPage } from "next";
import LoadingBar from "../components/layouts/LoadingBar";
import { horizentalPaddingGrowth } from "../data/ReusableClasses";
import { useState, useEffect } from "react";
import LandingHero from "../components/index-interfaces/LandingHero";
import LandingQuote from "../components/index-interfaces/LandingQuote";
import SneakPeak from "../components/index-interfaces/SneakPeak";

const Homepage: NextPage = () => {
  const [imageLoading, setImageLoading] = useState<true | false>(true);

  useEffect(() => {
    setTimeout(() => {
      setImageLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <section className="w-full relative z-10 flex flex-col">
        <LandingHero />
        <LandingQuote />
        <SneakPeak />
      </section>
    </div>
  );
};

export default Homepage;
