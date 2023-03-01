import React from "react";
import Link from "next/link";

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
  ];
  return (
    <nav className="absolute flex  items-center justify-between top-0 w-full py-6 md:px-10 px-2 z-10">
      <h1 className="text-green-400 font-bold text-xl">Class Attendance</h1>

      <ul className=" md:flex hidden items-center justify-between">
        {navLinks.map((link) => (
          <Link href={link.link} key={link.name}>
            <li className="py-2 px-4  hover:cursor-pointer">{link.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
