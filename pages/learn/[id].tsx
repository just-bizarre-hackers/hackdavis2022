/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { useRouter } from "next/router";
import RouteTree from "../../components/reusable/RouteTree";
import { horizentalPaddingGrowth } from "../../data/ReusableClasses";
import {
  AiOutlineCheck,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Categories } from "../../data/Courses";
import { NextPage } from "next";
import React, { useState } from "react";

const LearnDetailPage: NextPage = () => {
  const router = useRouter();
  const { id, title, desc, tags } = router.query;

  const [curScreen, setCurScreen] = useState<number>(0);
  const pageIncreaseClick = (param: number) => {
    setCurScreen((cur: number) => {
      if (param === 1) {
        if (cur === 3) {
          return cur;
        }
      } else if (param < 0) {
        if (cur === 0) {
          return cur;
        }
      }
      return cur + param;
    });
  };
  const onGetStartedClick = () => {
    router.push(
      {
        pathname: `/learn/${id}`,
        query: {
          id,
          title,
          desc,
        },
      },
      `/learn/${id}`
    );
  };

  return (
    <div className="font-mali">
      <section className={`px-8 py-16 md:px-12 lg:px-20 xl:px-36 2xl:px-60`}>
        <RouteTree />
        {curScreen === 0 && (
          <article className="mt-12 grid grid-cols-1 relative">
            <section className="bg-themeNavyDarker text-white p-8 md:p-12 lg:px-16 xl:px-20 shadow-md rounded-[3rem]">
              <article className="w-full relative h-6 bg-white rounded-full overflow-hidden">
                <span className="absolute w-1/4 h-6 bg-themeGreen rounded-full" />
              </article>
              <article className="w-full flex flex-col justify-between mt-4">
                <div className="mb-8">
                  <h3 className="font-bold text-2xl lg:text-3xl">
                    What is Food Allergy?
                  </h3>
                  <section className="mt-2">
                    <h4 className="font-medium underline text-xl lg:text-2xl">
                      Food Allergy
                    </h4>
                    <p className="text-lg">
                      An immune system reaction that occurs soon after eating a
                      certain food.
                    </p>
                  </section>
                </div>
                <div className="mb-8">
                  <h3 className="font-bold mb-4 text-2xl lg:text-3xl">
                    What causes food allergy?
                  </h3>
                  <p className="text-lg">
                    Food allergies happen when the immune system – the
                    body&apos;s defense against infection – mistakenly treats
                    proteins found in food as a threat. As a result, a number of
                    chemicals are released. It&apos;s these chemicals that cause
                    the symptoms of an allergic reaction.
                  </p>
                  <p className="text-lg my-4">
                    Most children that have a food allergy will have experienced
                    eczema during infancy. The worse the child&apos;s eczema and
                    the earlier it started, the more likely they are to have a
                    food allergy.
                  </p>
                  <p className="text-lg">
                    <strong>*Eczema</strong>: a condition that causes the skin
                    to become itchy, dry and cracked.
                  </p>
                </div>
                <div className="flex flex-cols justify-center items-center space-x-4 text-2xl">
                  {/* <AiOutlineArrowLeft onClick={() => pageIncreaseClick(-1)} />s */}
                  <button>Page 1/3</button>
                  <AiOutlineArrowRight onClick={() => pageIncreaseClick(1)} />
                </div>
              </article>
            </section>
          </article>
        )}
        {curScreen === 1 && (
          <article className="mt-12 grid grid-cols-1 relative">
            <section className="bg-themeNavyDarker text-white p-8 md:p-12 lg:px-16 xl:px-20 shadow-md rounded-[3rem]">
              <article className="w-full relative h-6 bg-white rounded-full overflow-hidden">
                <span className="absolute w-2/4 h-6 bg-themeGreen rounded-full" />
              </article>
              <article className="w-full flex flex-col justify-between mt-4">
                <div className="mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <section className="mt-2">
                      <h3 className="font-bold text-2xl lg:text-3xl mb-4">
                        What is an Allergen?
                      </h3>
                      <h4 className="font-medium underline text-xl lg:text-2xl mb-2">
                        Allergen
                      </h4>
                      <p className="text-lg">
                        A substance that causes an allergic reaction.
                      </p>
                    </section>
                    <section className="">
                      <h4 className="font-bold text-xl lg:text-2xl mb-4">
                        What are the most frequent food allergen?
                      </h4>
                      <p className="text-lg underline">
                        Milk, Fish, Eggs, Shellfish, Peanuts, Fruits &
                        Vegetables, and Tree Nuts
                      </p>
                    </section>
                  </div>
                </div>
                <div className="mt-2 mb-8">
                  <h4 className="font-bold text-xl lg:text-2xl mb-2">
                    When do you develop allergies?
                  </h4>
                  <p className="text-base">
                    You are able to develop allergies as young as an infant, or
                    as old as an adult. Since there is no maximum age limit of
                    who develops food allergies, you should always be aware of
                    what you eat and how your body reacts to it.
                  </p>
                </div>
                <div className="flex flex-cols justify-center items-center space-x-4 text-2xl">
                  <AiOutlineArrowLeft onClick={() => pageIncreaseClick(-1)} />
                  <button>Page 2/3</button>
                  <AiOutlineArrowRight onClick={() => pageIncreaseClick(1)} />
                </div>
              </article>
            </section>
          </article>
        )}
        {curScreen === 2 && (
          <article className="mt-12 grid grid-cols-1 relative">
            <section className="bg-themeNavyDarker text-white p-8 md:p-12 lg:px-16 xl:px-20 shadow-md rounded-[3rem]">
              <article className="w-full relative h-6 bg-white rounded-full overflow-hidden">
                <span className="absolute w-3/4 h-6 bg-themeGreen rounded-full" />
              </article>
              <article className="w-full flex flex-col justify-between mt-4">
                <div className="mb-8">
                  <h3 className="font-bold text-center text-2xl lg:text-4xl mb-4">
                    Let&apos;s Take the Quiz!
                  </h3>
                  <p className="font-thin text-base lg:text-xl text-center mb-1">
                    Almost there!
                  </p>
                  <p className="font-thin text-base lg:text-xl text-center">
                    Let&apos;s end this session with a short quiz to see whether
                    you are leaving this session with an appropriate knowledge!
                  </p>
                </div>
                <div className="flex flex-col space-y-4 lg:space-y-8 xl:space-y-12">
                  <section>
                    <h4 className="font-bold text-xl mb-2">
                      <span>1.</span>
                      <span>What is food allergy?</span>
                    </h4>
                    <ol className="flex flex-col justify-start items-start space-y-0.5">
                      <li>
                        <p>A) being picky about food</p>
                      </li>
                      <li>
                        <p>B) your body reacting after eating a certain food</p>
                      </li>
                      <li>
                        <p>C) not being able to eat your favorite food</p>
                      </li>
                      <li>
                        <p>D) just an excuse to not eat specific food</p>
                      </li>
                    </ol>
                  </section>
                  <section>
                    <h4 className="font-bold text-xl mb-2">
                      <span>2.</span>
                      <span>
                        What is the main cause of food allergy reaction?
                      </span>
                    </h4>
                    <ol className="flex flex-col justify-start items-start space-y-0.5">
                      <li>
                        <p>
                          A) your body finds the protein of that food as a
                          threat
                        </p>
                      </li>
                      <li>
                        <p>
                          B) your friend surprises you when you swallow the food
                        </p>
                      </li>
                      <li>
                        <p>C) your body wants you to stop eating that food</p>
                      </li>
                      <li>
                        <p>D) your mind is refusing to eat that food</p>
                      </li>
                    </ol>
                  </section>
                  <section>
                    <h4 className="font-bold text-xl mb-2">
                      <span>3.</span>
                      <span>
                        What is <span className="underline">NOT</span> one of
                        the most common allergens?
                      </span>
                    </h4>
                    <ol className="flex flex-col justify-start items-start space-y-0.5">
                      <li>
                        <p>A) milk</p>
                      </li>
                      <li>
                        <p>B) shellfish</p>
                      </li>
                      <li>
                        <p>C) rice</p>
                      </li>
                      <li>
                        <p>D) eggs</p>
                      </li>
                    </ol>
                  </section>
                  <section>
                    <h4 className="font-bold text-xl mb-2">
                      <span>4.</span>
                      <span>When do you develop food allergies?</span>
                    </h4>
                    <ol className="flex flex-col justify-start items-start space-y-0.5">
                      <li>
                        <p>A) infancy</p>
                      </li>
                      <li>
                        <p>B) childhood</p>
                      </li>
                      <li>
                        <p>C) adulthood</p>
                      </li>
                      <li>
                        <p>D) any time in your life</p>
                      </li>
                    </ol>
                  </section>
                </div>
                <div className="mt-8 flex flex-cols justify-center items-center space-x-4 text-2xl">
                    <button type="button" className="px-8 py-2 rounded-full bg-themeOrange shadow transition-all hover hover:bg-opacity-80 hover:shadow-2xl" onClick={() => pageIncreaseClick(1)}>
                        Submit Quiz
                    </button>
                </div>
              </article>
            </section>
          </article>
        )}

        {curScreen === 3 && (
          <article className="mt-12 grid grid-cols-1 relative">
            <section className="bg-themeNavyDarker text-white p-8 md:p-12 lg:px-16 xl:px-20 shadow-md rounded-[3rem]">
              <article className="w-full relative h-6 bg-white rounded-full overflow-hidden">
                <span className="absolute w-full h-6 bg-themeGreen" />
              </article>
              <article className="w-full flex flex-col justify-between mt-4">
                <div className="mb-8">
                  <h3 className="mb-8 font-bold text-center text-lg md:text-xl lg:text-2xl">
                    Congrats!
                  </h3>
                  <img
                    className="w-full md:w-3/4 lg:w-2/4 mx-auto animate-bounce"
                    src="/peanut_learn_background.png"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="mb-4 font-bold text-center text-lg md:text-xl lg:text-2xl">
                    You&apos;ve completed this session!
                  </h3>
                  <button
                    onClick={() => router.push("/courses")}
                    className="px-8 py-3 bg-themeOrange font-medium text-lg rounded-full transition-all hover hover:bg-opacity-80 hover:shadow-2xl"
                  >
                    Back to Courses
                  </button>
                </div>
              </article>
            </section>
          </article>
        )}
      </section>
    </div>
  );
};

export default LearnDetailPage;
