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
        <section
          className={horizentalPaddingGrowth(
            "w-full flex justify-between items-center py-4 relative"
          )}
        >
          <h3
          id={scroller ? 'header-popup-on' : 'header-popup-out'}
          className={scroller ? 'bg-themeNavyDarker bg-opacity-90 shadow-lg hover:shadow-2xl  font-medium hover hover:bg-themeBlue transition-all' : 'bg-transparent shadow-md'}
        >
          <Link href={"/resources"}>
            <a>Get Our Resources</a>
          </Link>
        </h3>
          <h1 className="relative z-40">
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
