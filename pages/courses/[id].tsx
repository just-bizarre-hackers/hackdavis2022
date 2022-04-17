/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { useRouter } from "next/router";
import RouteTree from "../../components/reusable/RouteTree";
import { horizentalPaddingGrowth } from "../../data/ReusableClasses";
import { AiOutlineCheck } from "react-icons/ai";
import { Categories } from "../../data/Courses";

const CourseDetailPage = () => {
  const router = useRouter();
  const { id, title, desc, tags } = router.query;

  const onGetStartedClick = () => {
    router.push({
      pathname: `/learn/${id}`,
      query: {
        id,
        title,
        desc,
      }
    }, `/learn/${id}`)
  

  return (id && title && desc)  ? (
    <div>
      <section className={`px-8 py-16 md:px-12 lg:px-20 xl:px-36 2xl:px-60`}>
        <RouteTree />
          <article className="mt-12 grid grid-cols-1 lg:grid-cols-2 relative">
            <section className="bg-themeYellow p-8 md:p-12 lg:p-16 xl:p-20 rounded-xl lg:rounded-r-none shadow-md lg:rounded-l-xl relative z-20">
              <h3 className="font-bold text-3xl">Course Overview</h3>
              <p className="font-semibold py-4 md:p-4">
                In this course, you will learn:
              </p>
              <ul className="flex flex-col space-y-1 md:px-4">
                <li className="inline-flex justify-start items-start md:items-center space-x-2 font-medium ">
                  <AiOutlineCheck className="inline-block text-themeOrange " />
                  <p>What is a food allergy</p>
                </li>
                <li className="inline-flex justify-start items-start md:items-center space-x-2 font-medium ">
                  <AiOutlineCheck className="inline-block text-themeOrange " />
                  <p>How an allergic reaction occurs in your body</p>
                </li>
                <li className="inline-flex justify-start items-start md:items-center space-x-2 font-medium ">
                  <AiOutlineCheck className="inline-block text-themeOrange " />
                  <p>What are the short and long term effets</p>
                </li>
              </ul>
              <div className="md:px-4 pt-8">
                <button className="px-8 py-3 rounded-full bg-themeNavy transition-all hover hover:bg-themeBlue hover:shadow-xl font-medium text-white shadow-md">
                  Get Started
                </button>
              </div>
            </section>
            <section className="py-6 ">
              <article className="bg-slate-200 h-full overflow-hidden rounded-xl lg:rounded-l-none shadow-2xl relative z-10">
                <img
                  className="h-full"
                  src="https://wallpaperaccess.com/full/1369012.jpg"
                />
              </article>
            </section>
          </article>
      </section>
    </div>
  ) : (
    <div>
      <p>Inappropriate Routing Pushed.</p>
    </div>
  );
}
};

export default CourseDetailPage;