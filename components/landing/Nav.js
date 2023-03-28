import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Students",
      link: "/students",
    },
    {
      name: "Staff",
      link: "/staff",
    },
    {
      name: "Faqs",
      link: "/faqs",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("green");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  const transparent = {
    backgroundColor: "transparent",
    color: "#4ADE80",
  };
  const opaque = {
    backgroundColor: "#4ADE80",
    color: "white",
  };
  return (
    <nav
      className=" flex  fixed  items-center justify-between top-0 w-full z-40"
      style={color ? opaque : transparent}
    >
      <div className=" flex  items-center justify-between w-full py-6 md:px-10 px-2 relative">
        <h1
          className={`${
            color ? "text-white" : "text-green-400"
          } font-bold text-xl`}
        >
          Class Attendance
        </h1>

        <ul className=" sm:flex hidden items-center justify-between">
          {navLinks.map((l) => (
            <Link href={l.link} key={l.name}>
              <li className="py-2 px-4  hover:cursor-pointer">{l.name}</li>
            </Link>
          ))}
        </ul>

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className="text-red-400" />
          ) : (
            <AiOutlineMenu
              size={20}
              className={`${
                color ? "text-white" : "text-green-400"
              } font-bold `}
            />
          )}
        </div>

        <div
          className={` absolute text-right bg-green-400 text-white rounded-md right-0 duration-300 ease-in-out  ${
            nav ? "top-[100%]  opacity-1" : "top-[150%] opacity-0 "
          }`}
        >
          <ul>
            {navLinks.map((l) => (
              <Link href={l.link} key={l.name}>
                <li className="py-2 px-4  hover:cursor-pointer">{l.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
