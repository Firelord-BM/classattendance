import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <section
        className=" flex h-full md:flex-row flex-col relative "
        id="Landing"
      >
        {children}
      </section>
    </div>
  );
}
