import React from "react";

export default function About2() {
  const aboutList = [
    {
      text: "Encouraging regular attendance",
    },
    {
      text: "Identifying at-risk students",
    },
    {
      text: "Improving school safety",
    },
    {
      text: "Emphasize transparency, integrity, and relationships. ",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center bg-slate-50">
      <div className="md:w-2/3 w-4/5 flex items-center md:flex-row flex-col py-20">
        <img
          src="/students.jpg"
          alt="Cas"
          className="md:w-1/2 w-full md:pr-5"
          data-aos="fade-right"
        />
        <span className=" md:pl-5 md:mt-0 mt-5" data-aos="fade-left">
          {/* <div className="w-10 h-[1px] bg-blue-400 mb-2" /> */}

          <h3>More about us</h3>
          <br />
          <p>
            Class attendance systems play a vital role in promoting regular
            attendance, identifying at-risk students, and improving academic
            performance and school safety.
          </p>
          <br />
          <ul>
            {aboutList.map((about, index) => (
              <li key={index} className="flex items-center">
                <b>~</b> &nbsp;&nbsp;<p>{about.text}</p>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}
