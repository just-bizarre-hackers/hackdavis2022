/**
 * @import next
 */
import { useRouter } from "next/router";
/**
 * @import react
 */
import React from "react";
/**
 * @import our database & interface exports
 */
import { Categories } from "../../data/Courses";
import { horizentalPaddingGrowth } from "../../data/ReusableClasses";

const SneakPeak: React.FC = () => {
  // router
  const router = useRouter();
  // custom functions
  const onCardClick = (index: number, title: string, desc: string) => {
    router.push(
      {
        pathname: `/courses/${index}`,
        query: {
          id: index,
          title,
          desc,
        },
      },
      `/courses/${index}`
    );
  };
  return (
    <div className="w-full relative">
      <section className={horizentalPaddingGrowth("w-full py-16")}>
        <h3 className="text-center text-themeNavy font-bold text-2xl mb-12">
          Have a Sneak Peek at Our Courses!
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 md:px-12 lg:px-20 xl:px-36">
          {Categories.map((categories, index) => (
            <article
              onClick={() =>
                onCardClick(
                  1,
                  categories.courses[0].title,
                  categories.courses[0].desc
                )
              }
              className="w-full relative inline-block bg-white rounded-xl overflow-hidden "
              key={index}
            >
              <div className="">
                <img
                  className="w-full"
                  alt="random pic"
                  src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?cs=srgb&dl=pexels-c%C3%A1tia-matos-1072179.jpg&fm=jpg"
                />
                <div className="w-full sticky text-sm bottom-0 bg-themeBlue hover:bg-themeNavy hover:bg-opacity-80 text-white text-center h-16 transition-all hover:h-full cursor-pointer flex flex-col justify-between pb-4 hover hover:bottom-[58px] transform hover:translate-y-[58px]">
                  <h3 className="font-medium py-4 px-4 text-lg">
                    {categories.title.slice(0, 21)}
                  </h3>
                  <p className="mb-4 px-8">{categories.courses[0].desc}</p>
                  <button className="w-max mx-auto px-3 py-2  border-2 border-white">
                    Learn Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SneakPeak;
