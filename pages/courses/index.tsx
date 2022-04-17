import { NextPage } from "next";
import CourseCategory from "../../components/courses-interface/CourseCategory";
import RouteTree from "../../components/reusable/RouteTree";
import { Categories } from "../../data/Courses";
import { horizentalPaddingGrowth } from "../../data/ReusableClasses";
import React, { useState, useEffect } from "react";
import LoadingBar from "../../components/layouts/LoadingBar";

const CoursesPage: NextPage = () => {
  const [imageLoading, setImageLoading] = useState<true | false>(true);

  useEffect(() => {
    setTimeout(() => {
      setImageLoading(false);
    }, 2000);
  }, []);

  return imageLoading ? (
    <LoadingBar
      id={
        imageLoading ? "loading-bar-container-in" : "loading-bar-container-out"
      }
    />
  ) : (
    <div className="w-full">
      <section
        className={`w-full flex flex-col justify-center items-center px-8 py-16 md:px-12 lg:px-20 xl:px-36 2xl:px-60`}
      >
        <h3 className="text-4xl font-bold">Courses</h3>
        <RouteTree />
      </section>
      <section
        className={horizentalPaddingGrowth(
          "w-full pb-16 flex flex-col space-y-12 lg:space-y-14 justify-center items-center"
        )}
      >
        {Categories.map((category, index) => (
          <CourseCategory categoryObject={category} key={index} />
        ))}
      </section>
    </div>
  );
};

export default CoursesPage;
