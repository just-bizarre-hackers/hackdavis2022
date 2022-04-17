/**
 * @import next
 */
import Link from "next/link";
/**
 * @import react
 */
import React, { useState, useEffect } from "react";
/**
 * @import our react components
 */
import MobileHeader from "./MobileHeader";
/**
 * @import react icons
 */
import { BsEyeglasses } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
/**
 * @import our database & interface exports
 */
import { internalLinks } from "../../data/InternalLinks";
import { horizentalPaddingGrowth } from "../../data/ReusableClasses";

const Header: React.FC = () => {
  // states
  const [clicked, setClicked] = useState<boolean>(false);
  const [scroller, setScroller] = useState(false);
  // effects
  useEffect(() => {
    window.onscroll = () => {
      onScroll();
    };
  }, [scroller]);
  // custom functions
  const onScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setScroller(true);
    } else {
      setScroller(false);
    }
  };
  return (
    <React.Fragment>
      <header
        id="header"
        className={
          scroller
            ? "w-full shadow-none border-b border-slate-200 sticky top-0 z-40 bg-white text-themeNavy"
            : "w-full border-b border-transparent shadow-md sticky top-0 z-40 bg-white text-themeNavy"
        }
      >
        <h3
          className={
            scroller
              ? "absolute w-max bottom-0 left-12 md:left-16 lg:left-20 xl:left-24 2xl:left-28 px-8 translate-y-5 shadow-lg bg-themeNavy z-10 text-white rounded-r-lg transition-all transform opacity-1 py-1 animate-pulse"
              : "absolute shadow-2xl overflow-hidden opacity-0 bottom-0 left-8 translate-y-5 bg-themeYellow px-4  rounded-r-lg transition-all transform"
          }
        >
          <Link href={"/resources"}>
            <a>Get Our Resources</a>
          </Link>
        </h3>
        <section
          className={horizentalPaddingGrowth(
            "w-full flex justify-between items-center py-4"
          )}
        >
          <h1>
            <Link href={"/"}>
              <a className="flex items-center space-x-2 font-bold relative">
                <BsEyeglasses
                  className={
                    !scroller
                      ? "text-4xl transition-all absolute rotate-90 transform translate-y-0"
                      : "text-4xl left-0 translate-y-full -translate-x-4 -rotate-90 transition-all absolute transform"
                  }
                />
                <span
                  className={
                    !scroller ? "text-2xl pl-6" : "text-xl transition-all"
                  }
                >
                  SmartAllergy
                </span>
              </a>
            </Link>
          </h1>
          <nav className="items-center space-x-2 lg:space-x-4 2xl:space-x-6 hidden md:flex">
            {internalLinks.map((eachLink, index) => (
              <Link href={eachLink.href} key={index}>
                <a>{eachLink.text}</a>
              </Link>
            ))}
          </nav>
          <nav className="flex md:hidden items-center justify-center">
            <button onClick={() => setClicked(true)}>
              <FiMenu className="text-4xl" />
            </button>
          </nav>
        </section>
      </header>
      {clicked && <MobileHeader />}
    </React.Fragment>
  );
};

export default Header;
