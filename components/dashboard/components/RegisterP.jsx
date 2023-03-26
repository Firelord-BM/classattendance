import React from "react";
import ClassesRegisted from "./ClassesRegisted";
import { useState } from "react";

export default function RegisterP() {
  const classes = [
    {
      name: "Comp 100",
      lecture: "Mr Kimuri",
      registered: true,
    },
    {
      name: "Comp 140",
      lecture: "Mr Kimuri",
      registered: false,
    },
    {
      name: "Comp 121",
      lecture: "Mr Kimuri",
      registered: true,
    },
    {
      name: "Stat100",
      lecture: "Mr Kimuri",
      registered: true,
    },
    {
      name: "Math 130",
      lecture: "Mr Kimuri",
      registered: true,
    },
    {
      name: "Econ 120",
      lecture: "Mr Kimuri",
      registered: true,
    },
    {
      name: "Phil 120",
      lecture: "Mr Kimuri",
      registered: true,
    },
    {
      name: "Phy 136",
      lecture: "Mr Kimuri",
      registered: true,
    },
    {
      name: "Acmp 156",
      lecture: "Mr Kimuri",
      registered: true,
    },
  ];
  const [registeredClasses, setRegisteredClasses] = useState(
    classes.filter((classItem) => classItem.registered)
  );

  const handleRegister = (classItem) => {
    setRegisteredClasses([...registeredClasses, classItem]);
  };

  const handleUnregister = (classItem) => {
    setRegisteredClasses(
      registeredClasses.filter((item) => item.name !== classItem.name)
    );
  };
  const fName =
    localStorage.getItem("fName") + " " + localStorage.getItem("lName");
  const reg = localStorage.getItem("reg");
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
          <div className="w-full flex items-center">
            {" "}
            <div className="w-[100px] h-[100px] overflow-hidden  rounded-full bg-green-400">
              <img src="/jane.jpg" width="100%" alt="" />{" "}
            </div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <h1 className="font-black text-green-900 text-2xl">{fName}</h1>
              <h2 className="font-medium text-green-700 text-sm">{reg}</h2>
            </span>
          </div>

          <br />
          <div className="w-full text-left text-green-900">
            <h3 align="left">Registered classes</h3>
          </div>
          <br />
          <ClassesRegisted />
        </div>
        <div className="flex-1 md:ml-6 rounded-2xl bg-white border-2 flex flex-col items-center p-4">
          <div className="w-full text-left text-green-900">
            <h3 align="left">Register classes</h3>
          </div>
          <br />
          <div className="w-full">
            <p>
              <i>Available classes this semester</i>
            </p>
            <br />

            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="text-lg font-bold bg-slate-50  rounded-2xl">
                  <th className="px-4 py-2 text-green-900 text-left">
                    Lecturer
                  </th>
                  <th className="px-4 py-2 text-green-900 text-left">
                    Registered
                  </th>
                  <th className="px-4 py-2 text-green-900 text-left">
                    Unit Code
                  </th>
                  <th className="px-4 py-2 text-green-900 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-base border-t-2">
                {classes.map((classItem, index) => (
                  <tr
                    key={classItem.name}
                    className={` ${
                      index % 2 == 0 ? "bg-white" : "bg-slate-50"
                    } hover:bg-green-50 transition-colors`}
                  >
                    <td className="px-4 py-2 text-slate-800">
                      {classItem.name}
                    </td>
                    <td className="px-4 py-2  text-slate-600">
                      {classItem.lecture}
                    </td>
                    <td className="px-4 py-2">
                      {classItem.registered ? (
                        <i className="fa-solid fa-check text-green-500" />
                      ) : (
                        <i className="fa-solid fa-times  text-red-500" />
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {classItem.registered ? (
                        <button
                          className="bg-red-400 text-xs w-20 text-white rounded-2xl py-1 px-2"
                          onClick={() => handleUnregister(classItem)}
                        >
                          Unregister
                        </button>
                      ) : (
                        <button
                          className="bg-green-400 text-xs w-20 text-white rounded-2xl py-1 px-2"
                          onClick={() => handleRegister(classItem)}
                        >
                          Register
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
