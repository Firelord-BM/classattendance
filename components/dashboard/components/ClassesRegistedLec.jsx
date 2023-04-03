import React from "react";

export default function ClassesRegistedLecturer() {
  const registered = [
    {
      id: 1,
      name: "Computer Science 100",
      code: "COMP 100",
      students: "72",
    },
    {
      id: 2,
      name: "Computer Science 200",
      code: "COMP 200",
      students: "102",
    },
    {
      id: 3,
      name: "Computer Science 300",
      code: "COMP 300",
      students: "72",
    },
    {
      id: 4,
      name: "Computer Science 400",
      code: "COMP 400",
      students: "49",
    },
  ];
  return (
    <>
      <h3 className="text-lg font-bold">Your Classes</h3>
      <br />
      <ul className="w-full">
        {registered.map((item, index) => (
          <li
            key={index}
            className={`py-2 px-4 flex flex-col md:flex-row items-center justify-between ${
              index % 2 === 0 ? "bg-slate-50" : "bg-white"
            }`}
          >
            <p className="text-md md:text-lg font-medium mb-2 md:mb-0 md:mr-6" title={item.name}>
              {item.code}{" "}
            </p>
            <p className="text-md text-green-800 mb-2 md:mb-0 md:mr-6" title="Number of students">
              {item.students}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}