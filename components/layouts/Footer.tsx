/**
 * @import react
 */
import React from "react";
/**
 * @import react icons
 */
import { IoLanguageOutline } from "react-icons/io5";
/**
 * @import our database & interface exports
 */
import { horizentalPaddingGrowth } from "../../data/ReusableClasses";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="w-full bg-themeNavy text-white border-t">
      <section
        className={horizentalPaddingGrowth(
          "w-full py-12 grid grid-cols-1 md:grid-cols-2 gap-12"
        )}
      >
        <article className="flex h-full flex-col space-y-4 md:space-y-0 justify-between items-start">
          <p className="font-mali md:w-1/2 text-slate-300">
            Our mission is to spread awareness about food allergies and provide
            free education regarding the subject.
          </p>
          <div className="flex space-x-2">
            <span className="font-medium">Languages</span>
            <button className="flex items-center space-x-1 text-slate-300 transition-all hover hover:text-themeBlue">
              <span>English</span>
              <IoLanguageOutline className="xl" />
            </button>
          </div>
        </article>
        <article className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 xl:space-x-20 justify-start">
          <div>
            <h4 className="font-semibold mb-2 text-lg">About</h4>
            <nav className="flex flex-col space-y-1">
              <a href="">Our Team</a>
              <a href="">News</a>
              <a href="">Our Finances</a>
              <a href="">Career Opportunities</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Resources</h4>
            <nav className="flex flex-col space-y-1">
              <a href="">External links</a>
              <a href="">Allergy medication</a>
              <a href="">Where to receive help</a>
              <a href="">Career Opportunities</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Courses</h4>
            <nav className="flex flex-col space-y-1">
              <a href="">Food Allergy</a>
              <a href="">Allergic Reactions</a>
              <a href="">Allergy Awareness</a>
              <a href="">Coping with Allergies</a>
            </nav>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
