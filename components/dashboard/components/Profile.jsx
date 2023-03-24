import React from "react";
import PForm from "./PForm";

export default function Profile() {
  return (
    <div className="w-full ">
      <div
        id="profile-banner"
        className=" h-[350px] w-full  rounded-bl-2xl rounded-br-2xl"
      />
      <div
        id="cardWrapper"
        className="w-[95%] flex mt-[-150px] mx-auto justify-between"
      >
        <div
          id="user"
          className="w-1/4 rounded-2xl bg-white border-2 flex flex-col items-center p-4"
        >
          <div className="w-[150px] h-[150px] overflow-hidden  rounded-full bg-green-400">
            {" "}
            <img src="/jane.jpg" width="100%" alt="" />{" "}
          </div>
          <br />
          <h1 className="font-black text-green-900 text-2xl">Jane Doe</h1>
          <h2 className="font-medium text-green-700 text-sm">S13/02580/20</h2>
          <br />
          <ul className="w-full">
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Date Of Birth</h4>
              <p>01/18/2001</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Email</h4>
              <p>jane@gmail.com</p>
            </li>
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Phone</h4>
              <p>+254703231321</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Year</h4>
              <p>III</p>
            </li>
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Semester</h4>
              <p>2</p>
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
