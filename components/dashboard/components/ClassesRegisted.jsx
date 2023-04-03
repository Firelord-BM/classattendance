import React from "react";

export default function ClassesRegisted() {
  const registered = [
    {
      name: "Comp 100",
    },
    {
      name: "Comp 140",
    },
    {
      name: "Comp 121",
    },
    {
      name: "Stat100",
    },
    {
      name: "Math 130",
    },
    {
      name: "Econ 120",
    },
    {
      name: "Phil 120",
    },
    {
      name: "Phy 136",
    },
    {
      name: "Acmp 156",
    },
  ];
  return (
    <div className="w-full">
      <ul className="w-full divide-y divide-gray-200">
        {registered.map((item, index) => (
          <li
            key={index}
            className={`py-2 px-4  flex items-center justify-between ${
              index % 2 == 0 ? "bg-slate-50" : "bg-white"
            }`}
          >
            <p className="text-sm sm:text-base">{item.name} </p>
            <i className="fa-solid fa-eye text-green-400 hover:cursor-pointer hover:text-green-800"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}