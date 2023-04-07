import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function Nav() {
  const router = useRouter();
  const currentUrl = router.asPath.split("/")[1];
  const dashboardLinks = [
    {
      id: 0,
      name: "Dashboard",
      link: "/dashboard",
      icon: "fa-gauge",
      role: 0,
    },
    {
      id: 1,
      name: "Attendance",
      link: "/attendance",
      icon: "fa-clipboard-user",
      role: 0,
    },
    {
      id: 2,
      name: "Register",
      link: "/register",
      icon: " fa-address-card",
      role: 0,
    },
    {
      id: 3,
      name: "Profile",
      link: "/profile",
      icon: "fa-user",
      role: 0,
    },
    {
      id: 4,
      name: "Create class",
      link: "/create-class",
      icon: "fa-plus",
      role: 1,
    },
    {
      id: 5,
      name: "Generate Qr-code",
      link: "/generate-qr-code",
      icon: "fa-qrcode",
      role: 1,
    },
  ];
  const role = localStorage.getItem("role");
  const handleLogout = () => {
    confirmAlert({
      title: "Confirm Logout",
      message: "Are you sure you want to log out?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
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
    <nav className="pl-2 " >
      <h1 className="text-4xl text-white font-black">CAMS</h1>

      <ul className="mt-20 text-white ">
        {dashboardLinks
          .filter((link) => (role == 1 ? true : link.role == 0))
          .map((link) => (
            <Link key={link.name} href={link.link}>
              <li
                className={`flex items-center mb-4 text-xl ${
                  "/" + currentUrl == link.link
                    ? "bg-white text-green-400"
                    : "text-white"
                }  rounded-tl-[20px] rounded-bl-[20px] py-3 pl-2`}
              >
                <i className={`fa-solid ${link.icon} pr-4`}></i>
                
    <span className=" hidden md:inline ">
      {link.name}
    </span>
              
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
}
