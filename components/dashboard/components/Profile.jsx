import React from "react";
import PForm from "./PForm";

export default function Profile() {
  const fName =
    localStorage.getItem("fName") + " " + localStorage.getItem("lName");
  const reg = localStorage.getItem("reg");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const sem = localStorage.getItem("sem");
  const year = localStorage.getItem("year");
  return (
    <div className="w-full ">
      <div
        id="profile-banner"
        className="h-[30rem] md:h-[35rem] lg:h-[40rem] rounded-bl-2xl rounded-br-2xl"
      />
      <div
        id="cardWrapper"
        className="max-w-screen-lg mx-auto px-4 md:px-0 flex-col md:flex-row justify-between mt-[-150px]"
      >
        <div
          id="user"
          className="w-full md:w-1/2 rounded-2xl bg-white border-2 flex flex-col items-center p-4"
        >
          <div className="w-[150px] h-[150px] overflow-hidden  rounded-full bg-green-400">
            {" "}
            <img src="/jane.jpg" width="100%" alt="" />{" "}
          </div>
          <br />
          <h1 className="font-black text-green-900 text-2xl">{fName}</h1>
          <h2 className="font-medium text-green-700 text-sm">{reg}</h2>
          <br />
          <ul className="w-full">
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Date Of Birth</h4>
              <p>01/18/2001</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Email</h4>
              <p>{email}</p>
            </li>
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Phone</h4>
              <p>{phone}</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Year</h4>
              <p>{year}</p>
            </li>
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Semester</h4>
              <p>{sem}</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Gender</h4>
              <p>Female</p>
            </li>
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Faculty</h4>
              <p>Science</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Department</h4>
              <p>Computer Sci</p>
            </li>
          </ul>
        </div>
        <div className="flex-1 md:ml-6 rounded-2xl bg-white border-2 flex flex-col items-center p-4">
          <h3>Edit your profile</h3>
          <br />
          <PForm />
        </div>
      </div>
    </div>
  );
}
