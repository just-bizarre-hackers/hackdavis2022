import { NextPage } from "next";
import ResourcesCard from "../components/resources-interfaces/ResourcesCard";
import RouteTree from "../components/reusable/RouteTree";
import { horizentalPaddingGrowth } from "../data/ReusableClasses";

const Resourcespage: NextPage = () => {
  return (
    <div className="w-full">
      <section
        className={`w-full pt-8 flex flex-col justify-center items-center px-8 py-16 md:px-12 lg:px-20 xl:px-36 2xl:px-60`}
      >
        <RouteTree />
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 md:px-12 lg:px-20 xl:px-36 2xl:px-60">
        <article className="flex flex-col space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Resouces</h2>
            <p className="mb-2">
              Think you have a Food Allergy or want to test whether you have a
              food allergy or not?
            </p>
            <p>
              These are some of the links that would let you find where to get
              tested:
            </p>
          </div>
          <ResourcesCard />
        </article>
        <article>
          <img src="https://assets.teenvogue.com/photos/5b620d2eac76ac6f7166e3fd/16:9/w_2560%2Cc_limit/GettyImages-597987772.jpg" />
        </article>
      </section>
      <div className="inline-block relative w-full align-middle overflow-hidden transform rotate-90"></div>
    </div>
  );
};

export default Resourcespage;
