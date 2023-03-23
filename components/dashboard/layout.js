import React from "react";
import Meta from "../Meta";
import Nav from "./Nav";

const layout = ({ children }) => {
  return (
    <main id="dashboardLayout" className="flex">
      <Meta title="Dashboard" />
      <Nav />
      <section className="flex-1 bg-white rounded-tl-[20px] rounded-bl-[20px] flex flex-col items-center">
        <div
          id="dashboardNav"
          className=" flex  items-center justify-between w-full py-4 border-b- border-green-100 md:px-10 px-2 relative"
        >
          <h1 className="text-left text-green-600 text-xl font-black">
            Student Dashboard
          </h1>
          <span className="text-right">
            <h1 className="text-right text-green-800 text-xl font-black">
              John Doe
            </h1>
            <p className="text-sm text-green-400">S13/02580/20</p>
          </span>
        </div>
        {children}
      </section>
    </main>
  );
};

export default layout;
