import React from "react";

export default function LeaderBoard() {
  const listOfStudents = [
    {
      name: "Rohan Njuguna",
      position: 4,
      rate: 97.6,
    },
    {
      name: "Jessica Kim",
      position: 5,
      rate: 95.2,
    },
    {
      name: "Megan Lee",
      position: 6,
      rate: 92.8,
    },
    {
      name: "Sara Johnson",
      position: 7,
      rate: 90.4,
    },
    {
      name: "David Brown",
      position: 8,
      rate: 88,
    },
    {
      name: "Alexandra Smith",
      position: 9,
      rate: 85.6,
    },
    {
      name: "John Doe",
      position: 10,
      rate: 83.2,
    },
  ];

  return (
    <section
      id="leaderBoard"
      className="w-full flex items-center justify-center py-20"
    >
      <div className="md:w-4/5 w-11/12 flex items-center justify-center flex-col">
        <div
          id="Header"
          className="flex flex-col items-center justify-center text-center "
        >
          <img src="./crown.png" alt="crown" width="100px" />
          <br />
          <h1 className="text-4xl font-black text-amber-300 ">LEADERBOARD</h1>
          <br />
          <h4>Top 10 Winners</h4>
          <br />
          <br />
          <h2 className="text-3xl font-light text-white ">March</h2>
          <br />
          <br />
        </div>

        <div id="icons" className="flex w-full items-end justify-between">
          <div
            id="secondPlace"
            className="flex flex-1 items-center justify-between flex-col"
          >
            <div
              id="secondPlaceImage"
              className=" rounded-full border-4 relative border-purple-300/50"
            >
              <img
                src="/jane.jpg"
                alt="Jane"
                width="100%"
                className="w-28 h-28 rounded-full"
              />
              <span className=" bg-purple-300 bottom-[-20%]" id="number">
                2<sup>nd</sup>
              </span>
            </div>
            <br />
            <h5 className="text-white text-xl font-bold pt-4">Gina Kelly</h5>
            <i className="font-black text-amber-300 pt-3 text-lg">98</i>
          </div>

          <div
            id="firstPlace"
            className="flex flex-1 items-center justify-between flex-col"
          >
            <div
              id="firstPlaceImage"
              className=" rounded-full border-8 relative border-amber-300/50"
            >
              <img
                src="/jane.jpg"
                alt="Jane"
                width="100%"
                className="w-48 h-48 rounded-full"
              />
              <span className=" bg-amber-300 bottom-[-8%]" id="number">
                1<sup>st</sup>
              </span>
            </div>
            <br />

            <br />
            <h5 className="text-white text-xl font-bold pt-4">
              Stanley Graham
            </h5>
            <i className="font-black text-amber-300 pt-3 text-lg">10%</i>
          </div>

          <div
            id="thirdPlace"
            className="flex flex-1 items-center justify-between flex-col"
          >
            <div
              id="thirdPlaceImage"
              className="rounded-full border-4 relative border-pink-300/50"
            >
              <img
                src="/jane.jpg"
                alt="Jane"
                width="100%"
                className="w-28 h-28 rounded-full"
              />
              <span className=" bg-pink-300 bottom-[-20%]" id="number">
                3<sup>rd</sup>
              </span>
            </div>
            <br />
            <h5 className="text-white text-xl font-bold pt-4">Lois Davis</h5>
            <i className="font-black text-amber-300 pt-3 text-lg">97</i>
          </div>
        </div>
        <br />
        <br />

        <div id="list" className="w-full">
          <ul className="w-full">
            {listOfStudents.map((student, index) => (
              <li
                key={index}
                className={`flex items-center text-white bg-white/20 hover:scale-105 duration-300 cursor-pointer hover: justify-between rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-lg p-3 mb-${
                  index === listOfStudents.length - 1 ? 0 : 2
                }`}
              >
                <span className="flex items-center space-x-8">
                  <span className=" text-xl ">{student.position}</span>
                  <img
                    src="./jane.jpg"
                    alt={student.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <span className="text-xl">{student.name}</span>
                </span>
                <span className="font-bold text-lg text-amber-200">
                  {student.rate}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
