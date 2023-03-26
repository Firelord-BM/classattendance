import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const nav = () => {
  const router = useRouter();
  const currentUrl = router.asPath.split("/")[1];
  const dashboardLinks = [
    {
      id: 0,
      name: "Dashboard",
      link: "/dashboard",
      icon: "fa-gauge",
    },
    {
      id: 1,
      name: "Attendance",
      link: "/attendance",
      icon: "fa-clipboard-user",
    },
    {
      id: 2,
      name: "Register",
      link: "/register",
      icon: " fa-address-card",
    },
    {
      id: 3,
      name: "Profile",
      link: "/profile",
      icon: "fa-user",
    },
  ];
  const handleLogout = () => {
    confirmAlert({
      title: "Confirm Logout",
      message: "Are you sure you want to log out?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // Perform any logout logic here
            // Redirect the user to the home route
            localStorage.clear();
            window.location.href = "/";
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <nav className="w-1/5 pl-20 pt-10 relative" id="navDashboard">
      <h1 className="text-4xl text-white font-black">CAMS</h1>
      <ul className="mt-20 w-full">
        {dashboardLinks.map((link) => (
          <Link key={link.name} href={link.link}>
            <li
              className={`flex items-center mb-4 text-xl ${
                currentUrl == link.name.toLowerCase()
                  ? "bg-white text-green-400"
                  : "text-white"
              }  rounded-tl-[20px] rounded-bl-[20px] py-3 pl-2`}
            >
              <i className={`fa-solid ${link.icon}  pr-4`}></i>&nbsp;
              {link.name}
            </li>
          </Link>
        ))}
        <li
          onClick={handleLogout}
          className={`flex items-center mb-4 text-xl 
    text-white rounded-tl-[20px] rounded-bl-[20px] py-3 pl-2 cursor-pointer`}
        >
          <i className="fa-solid fa-right-from-bracket hover:text-red-400"></i>
          &nbsp; logout
        </li>
      </ul>
      <h3 className=" text-white italic text-sm absolute bottom-10 ">
        All rights reserved
      </h3>
    </nav>
  );
};

export default nav;
