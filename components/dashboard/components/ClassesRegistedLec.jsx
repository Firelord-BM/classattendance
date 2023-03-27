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
      <h3>Your Classes</h3>
      <br />
      <ul className="w-full">
        {registered.map((item, index) => (
          <li
            key={index}
            className={`py-2 px-4  flex items-center justify-between ${
              registered.length + 1 == index ? "mb-2" : "mb-0"
            } ${index % 2 == 0 ? "bg-slate-50" : "bg-white"}`}
          >
            <p className="" title={item.name}>
              {item.code}{" "}
            </p>
            <p className="text-green-800 " title="Number of students">
              {item.students}
            </p>
            {/* <i className="fa-solid fa-eye text-green-400 hover:cursor-pointer hover:text-green-800"></i> */}
          </li>
        ))}
        <br />
        <br />
      </ul>
    </>
  );
}
