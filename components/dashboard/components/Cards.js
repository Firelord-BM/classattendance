import React from "react";

export default function Cards() {
  const cardData = [
    {
      title: " Total Units",
      icon: "fa-landmark",
      value: "9",
      color: "bg-blue-400",
    },
    {
      title: "Missed classes",
      icon: "fa-ban",
      value: "2",
      color: "bg-red-400",
    },
    {
      title: "Attendance",
      icon: "fa-percentage",
      value: "90%",
      color: "bg-orange-400",
    },
    {
      title: "Remaining",
      icon: "fa-spinner",
      value: "46",
      color: "bg-purple-400",
    },
  ];
  return (
    <div className="  w-full flex flex-col items-center  md:p-10 mt-0 ">
      <div
        className=" w-full flex flex-wrap items-start justify-between "
        id="cards wrapper"
      >
        {/*containers*/}
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`md:w-1/5 h-[150px] w-full flex items-center justify-between  ${card.color} md:p-4 p-4  rounded-2xl box-shadow-2xl text-white shadow-blue`}
          >
            <span className="w-full h-full flex items-center justify-between">
              <i className={`fa-solid ${card.icon} text-6xl font-black `}></i>
              <div className=" text-white text-right">
                <i>{card.title}</i> <br />
                <br />
                <b className="text-3xl font-black">{card.value}</b>
              </div>
            </span>

            <br />

            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
