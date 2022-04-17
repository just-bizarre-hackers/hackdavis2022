import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: JSX.Element;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="layout" className="w-full relative">
      {/* layout header */}
      <Header />
      {/* layout main */}
      <main id="main">
          {children}
      </main>
      {/* layout footer */}
      <Footer />
    </div>
  );
};

export default Layout;
