import React from "react";
import Meta from "../Meta";
import Nav from "./Nav";
import { icons } from "react-icons";

const layout = ({ children }) => {
  return (
    <main id="dashboardLayout" className="flex">
      <Meta title="Dashboard" />
      <Nav />
      <section className="flex-1 bg-white rounded-tl-[20px] rounded-bl-[20px] flex flex-col items-center">
        <div className=" flex  items-center justify-between w-full py-4 border-b-2 border-green-100 md:px-10 px-2 relative">
          <h1 className="text-left text-green-600 text-xl pt-8 pl-4 font-black">
            Student Dashboard
          </h1>
          <h1 className="text-right text-green-800 text-xl pt-8 pr-4 font-black">
            John Doe
          </h1>
        </div>
        {children}
      </section>
    </main>
  );
};

export default layout;
