/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Categories, CategoryMetric } from "../../data/Courses";

const CourseCategory: React.FC<{ categoryObject: CategoryMetric }> = ({
  categoryObject,
}) => {
  const router = useRouter();
  const onCardClick = (
    index: number,
    title: string,
    desc: string,
    tags: Array<string>
  ) => {
    router.push(
      {
        pathname: `/courses/${index}`,
        query: {
          id: index,
          title,
          desc,
          tags,
        },
      },
      `/courses/${index}`
    );
  };
  return (
    <div className="w-full relative">
      <div
        className={`absolute w-full text-${categoryObject.themeClass} text-4xl z-20 top-1/2 left-0 px-24 flex justify-between`}
      >
        <button>
          <BiLeftArrow />
        </button>
        <button>
          <BiRightArrow />
        </button>
      </div>
      <section
        className={`w-full relative max-w-7xl z-20 mx-auto p-8 lg:px-24 text-themeNavy bg-${
          categoryObject.themeClass
        }${Categories.indexOf(categoryObject)} rounded-xl`}
      >
        <h3 className="text-xl lg:text-2xl py-4 text-center font-bold mb-4">
          {categoryObject.title}
        </h3>
        <div className="flex overflow-scroll">
          <div className="flex flex-nowrap space-x-12 ">
            {categoryObject.courses.map((course, index) => (
              <article
                onClick={() =>
                  onCardClick(index, course.title, course.desc, course.tags)
                }
                className="w-full relative inline-block bg-white rounded-[3rem] overflow-hidden "
                key={index}
              >
                <div className="w-64 h-64">
                  <img
                    className="h-full"
                    alt="random pic"
                    src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?cs=srgb&dl=pexels-c%C3%A1tia-matos-1072179.jpg&fm=jpg"
                  />
                  <div className="w-full sticky text-sm bottom-0 bg-themeBlue hover:bg-themeNavy hover:bg-opacity-80 text-white text-center h-16 transition-all hover:h-full cursor-pointer flex flex-col justify-between pb-4">
                    <h3 className="font-medium py-4 px-4 text-lg">
                      {course.title.slice(0, 21)}
                    </h3>
                    <p className="mb-4 px-8">{course.desc}</p>
                    <button className="w-max mx-auto px-3 py-2  border-2 border-white">
                      Learn Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCategory;
