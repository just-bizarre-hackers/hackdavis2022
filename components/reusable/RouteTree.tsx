/**
 * @import next
 */
import Link from "next/link";
import { useRouter } from "next/router";
/**
 * @import react
 */
import React from "react";
/**
 * @import our database & interface exports
 */
import { horizentalPaddingGrowth } from "../../data/ReusableClasses";

interface routerTree {
  text: string;
  href: string;
}

const RouteTree: React.FC = () => {
  // router
  const router = useRouter();

  return (
    <div className="w-full py-4 flex items-center bg-white border-b sticky top-8">
      <p className="flex items-center justify-start space-x-1 text-themeBlue">
        <Link href={"/"}>
          <a className="transition-all text-themeBlue text-opacity-75 hover hover:text-opacity-100">
            HOME
          </a>
        </Link>
        {router.asPath.split("/").map((each, index) => (
          <React.Fragment key={index}>
            <Link href={`/${each.toLowerCase()}`}>
              <a className="transition-all text-themeBlue text-opacity-75 hover hover:text-opacity-100">
                {each.toUpperCase()}
              </a>
            </Link>
            <span>/</span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default RouteTree;
