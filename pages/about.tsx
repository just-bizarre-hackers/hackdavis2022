import { NextPage } from "next";
import AboutCreators from "../components/about-interfaces/AboutCreators";
import OurMissionAndPurpose from "../components/about-interfaces/OurMissionAndPurpose";
import { horizentalPaddingGrowth } from "../data/ReusableClasses";

const Aboutpage : NextPage = () => {
  return (
    <div className="w-full">
      <section className={`w-full flex flex-col space-y-16 px-8 py-16 md:px-12 lg:px-20 xl:px-36 2xl:px-60`}>
        <OurMissionAndPurpose />
        <AboutCreators />
      </section>
    </div>
  )
};

export default Aboutpage;