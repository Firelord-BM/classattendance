import React from "react";

export default function Classes() {
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
    <div className="bg-slate-100 rounded-2xl px-3 py-5">
      <h3>Classes Registered</h3>
      <br />

      <ul className="flex-1">
        {registered.map((item, index) => (
          <li
            key={index}
            className={`py-2 px-4  flex items-center justify-between ${
              registered.length + 1 == index ? "mb-2" : "mb-0"
            } ${index % 2 == 0 ? "bg-slate-50" : "bg-white"}`}
          >
            <p className="">{item.name} </p>
            <i className="fa-solid fa-eye text-green-400 hover:cursor-pointer hover:text-green-800"></i>
          </li>
        ))}
      </ul>
      <br />
      <button>Register</button>
    </div>
  );
}
