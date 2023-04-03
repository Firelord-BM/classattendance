import React from "react";
import ClassForm from "./ClassForm";

export default function CreateClassLec() {
  const fName =
    localStorage.getItem("fName") + " " + localStorage.getItem("lName");
  const reg = localStorage.getItem("reg");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const sem = localStorage.getItem("sem");
  const year = localStorage.getItem("year");
  return (
    <div className="w-full">
      <div
        id="profile-banner"
        className="h-[350px] w-full rounded-bl-2xl rounded-br-2xl"
        style={{ backgroundImage: "url('/jane.jpg')", backgroundSize: "cover" }}
      />
      <div
        id="cardWrapper"
        className="w-[95%] flex mt-[-150px] mx-auto justify-between"
      >
        <div
          id="user"
          className="w-1/4 rounded-2xl bg-white border-2 flex flex-col items-center p-4"
        >
          <div className="w-[150px] h-[150px] overflow-hidden rounded-full bg-green-400">
            {" "}
            <img src="/jane.jpg" width="100%" alt="Profile picture of Jane" />{" "}
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
              <h4 className="text-sm text-green-800">Email</h4><p>{email}</p>
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
          <h3>Create a class</h3>
          <br />
          {/* <PForm /> */}
          <ClassForm />
        </div>
      </div>
    </div>
  );
}
