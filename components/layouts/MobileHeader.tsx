/**
 * @import next
 */
import Link from "next/link";
/**
 * @import react
 */
import React, { useState } from "react";
/**
 * @import react icons
 */
import { FiMenu } from "react-icons/fi";
/**
 * @import our database & interface exports
 */
import { internalLinks } from "../../data/InternalLinks";

const MobileHeader: React.FC = () => {
  // states
  const [clicked, setClicked] = useState<boolean>(false);

  return clicked ? (
    <aside className="w-full md:hidden fixed top-0 z-50 bg-themeNavyDarker bg-opacity-90 text-white min-h-screen flex flex-col justify-center items-center">
      <section className="w-full p-8 flex flex-col justify-center items-center space-y-4">
        {internalLinks.map((eachLink, index) => (
          <Link key={index} href={eachLink.href}>
            <a className="font-pops text-xl font-medium">{eachLink.text}</a>
          </Link>
        ))}
      </section>
      <button
        onClick={() => setClicked(true)}
        className="absolute right-8 top-8 transform rotate-90"
      >
        <FiMenu className="text-4xl" />
      </button>
    </aside>
  ) : null;
};

export default MobileHeader;
