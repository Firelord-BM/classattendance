import Link from "next/link";
import React from "react";

const Footer = () => {
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

  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-8">
      <div className="container mx-auto md:flex md:flex-wrap pyb-5 md:justify-between space-x-4">
        <div className="w-full md:w-1/4 mb-6 md:mb-0" data-aos="fade-right">
          <h3 className="text-lg font-medium mb-4">Class Attendance System</h3>
          <p className="text-sm">
            Our class attendance management system is a powerful tool designed
            to help schools track student attendance efficiently and
            effectively. With features like real-time attendance monitoring and
            user-friendly interfaces, our system is an essential solution for
            any school looking to improve its attendance tracking processes and
            support student success.{" "}
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0" data-aos="fade-up">
          <h3 className="text-lg font-medium mb-4">Navigation</h3>
          <nav className="text-sm">
            <ul className="list-none">
              {navLinks.map((link) => (
                <li key={link.name} className="mb-2">
                  <Link
                    href={link.link}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-1/4" data-aos="fade-left">
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <div className="flex items-center mb-4">
            <i className="fas fa-map-marker-alt text-green-500 text-xs mr-3"></i>
            <p className="text-sm">Egerton, Njoro</p>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-phone-alt text-green-500 text-xs mr-3"></i>
            <p className="text-sm">Phone: 020-555-5655</p>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-envelope text-green-500 text-xs mr-3"></i>
            <p className="text-sm">Email: info@cas.com</p>
          </div>
          <div className="flex items-center mb-4">
            <i className="fab fa-twitter text-green-500 text-xs mr-3"></i>
            <p className="text-sm">Twitter: @cas</p>
          </div>
          <div className="flex items-center mb-4">
            <i className="fab fa-instagram text-green-500 text-xs mr-3"></i>
            <p className="text-sm">Instagram: @cas</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-xs">
        <p>&copy; 2023 CAS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
