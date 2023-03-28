import React from "react";

export default function About() {
  return (
    <div id="about" className="w-full flex items-center justify-center">
      <div className="md:w-1/2 w-4/5 flex flex-col items-center text-center justify-center py-20">
        <br />
        <h2 className="text-slate-900" data-aos="fade-up">
          Revolutionizing attendance tracking, one QR code at a time.{" "}
        </h2>
        <br />
        <h3 data-aos="fade-up" data-aos-delay="50">
          WHEN ACCOUNTABILITY MATTERS
        </h3>
        <br />
        <br />
        <p data-aos="fade-up" data-aos-delay="100">
          Welcome to our class attendance management system! Our innovative
          system streamlines attendance tracking and makes it easier than ever
          to monitor student attendance.
        </p>
        <p data-aos="fade-up" data-aos-delay="150">
          By using QR codes to sign students into class, our system eliminates
          the need for manual attendance tracking and provides real-time
          attendance data. With our system, you can quickly and easily view
          attendance reports, identify at-risk students, and provide targeted
          support to help students succeed.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          Plus, our user-friendly interface and customizable features make it
          easy to meet the unique needs of your school or classroom. Join the
          many schools and educators who have already revolutionized attendance
          tracking with our class attendance management system!
        </p>
      </div>
    </div>
  );
}
