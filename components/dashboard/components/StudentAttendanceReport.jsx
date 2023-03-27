import React from "react";

export default function StudentAttendanceReport() {
  // create an array of numbers from 1 to 24
  const numbers = Array.from(Array(24), (_, i) => i + 1);
  const reportData = [
    {
      unit: "Comp 100",
      attendance: [
        { date: "2022-03-01", present: true },
        { date: "2022-03-05", present: false },
        { date: "2022-03-09", present: true },
        { date: "2022-03-13", present: true },
        { date: "2022-03-17", present: true },
        { date: "2022-03-21", present: true },
        { date: "2022-03-25", present: true },
        { date: "2022-03-29", present: false },
        { date: "2022-04-02", present: true },
        { date: "2022-04-06", present: true },
        { date: "2022-04-10", present: true },
        { date: "2022-04-14", present: true },
        { date: "2022-04-18", present: true },
        { date: "2022-04-22", present: true },
        { date: "2022-04-26", present: true },
        { date: "2022-04-30", present: true },
        { date: "2022-05-04", present: true },
        { date: "2022-05-08", present: true },
        { date: "2022-05-12", present: true },
        { date: "2022-05-16", present: true },
        { date: "2022-05-20", present: null },
        { date: "2022-05-24", present: null },
        { date: "2022-05-28", present: null },
        { date: "2022-06-01", present: null },
      ],
    },
    {
      unit: "Comp 140",
      attendance: [
        { date: "2022-03-01", present: true },
        { date: "2022-03-05", present: false },
        { date: "2022-03-09", present: true },
        { date: "2022-03-13", present: true },
        { date: "2022-03-17", present: true },
        { date: "2022-03-21", present: true },
        { date: "2022-03-25", present: true },
        { date: "2022-03-29", present: false },
        { date: "2022-04-02", present: true },
        { date: "2022-04-06", present: true },
        { date: "2022-04-10", present: true },
        { date: "2022-04-14", present: true },
        { date: "2022-04-18", present: false },
        { date: "2022-04-22", present: true },
        { date: "2022-04-26", present: true },
        { date: "2022-04-30", present: true },
        { date: "2022-05-04", present: true },
        { date: "2022-05-08", present: true },
        { date: "2022-05-12", present: true },
        { date: "2022-05-16", present: true },
        { date: "2022-05-20", present: null },
        { date: "2022-05-24", present: null },
        { date: "2022-05-28", present: null },
        { date: "2022-06-01", present: null },
      ],
    },
    {
      unit: "Comp 150",
      attendance: [
        { date: "2022-03-01", present: true },
        { date: "2022-03-05", present: false },
        { date: "2022-03-09", present: true },
        { date: "2022-03-13", present: true },
        { date: "2022-03-17", present: true },
        { date: "2022-03-21", present: true },
        { date: "2022-03-25", present: true },
        { date: "2022-03-29", present: false },
        { date: "2022-04-02", present: true },
        { date: "2022-04-06", present: true },
        { date: "2022-04-10", present: true },
        { date: "2022-04-14", present: true },
        { date: "2022-04-18", present: true },
        { date: "2022-04-22", present: true },
        { date: "2022-04-26", present: true },
        { date: "2022-04-30", present: true },
        { date: "2022-05-04", present: false },
        { date: "2022-05-08", present: true },
        { date: "2022-05-12", present: true },
        { date: "2022-05-16", present: true },
        { date: "2022-05-20", present: null },
        { date: "2022-05-24", present: null },
        { date: "2022-05-28", present: null },
        { date: "2022-06-01", present: null },
      ],
    },
    {
      unit: "Math 100",
      attendance: [
        { date: "2022-03-01", present: true },
        { date: "2022-03-05", present: false },
        { date: "2022-03-09", present: true },
        { date: "2022-03-13", present: true },
        { date: "2022-03-17", present: true },
        { date: "2022-03-21", present: true },
        { date: "2022-03-25", present: true },
        { date: "2022-03-29", present: false },
        { date: "2022-04-02", present: true },
        { date: "2022-04-06", present: true },
        { date: "2022-04-10", present: true },
        { date: "2022-04-14", present: true },
        { date: "2022-04-18", present: true },
        { date: "2022-04-22", present: false },
        { date: "2022-04-26", present: true },
        { date: "2022-04-30", present: true },
        { date: "2022-05-04", present: true },
        { date: "2022-05-08", present: false },
        { date: "2022-05-12", present: true },
        { date: "2022-05-16", present: true },
        { date: "2022-05-20", present: null },
        { date: "2022-05-24", present: null },
        { date: "2022-05-28", present: null },
        { date: "2022-06-01", present: null },
      ],
    },
    {
      unit: "Stat 100",
      attendance: [
        { date: "2022-03-01", present: true },
        { date: "2022-03-05", present: false },
        { date: "2022-03-09", present: true },
        { date: "2022-03-13", present: false },
        { date: "2022-03-17", present: true },
        { date: "2022-03-21", present: true },
        { date: "2022-03-25", present: true },
        { date: "2022-03-29", present: false },
        { date: "2022-04-02", present: true },
        { date: "2022-04-06", present: true },
        { date: "2022-04-10", present: true },
        { date: "2022-04-14", present: true },
        { date: "2022-04-18", present: true },
        { date: "2022-04-22", present: true },
        { date: "2022-04-26", present: true },
        { date: "2022-04-30", present: true },
        { date: "2022-05-04", present: true },
        { date: "2022-05-08", present: true },
        { date: "2022-05-12", present: true },
        { date: "2022-05-16", present: true },
        { date: "2022-05-20", present: null },
        { date: "2022-05-24", present: null },
        { date: "2022-05-28", present: null },
        { date: "2022-06-01", present: null },
      ],
    },
    {
      unit: "Econ 100",
      attendance: [
        { date: "2022-03-01", present: true },
        { date: "2022-03-05", present: false },
        { date: "2022-03-09", present: true },
        { date: "2022-03-13", present: true },
        { date: "2022-03-17", present: true },
        { date: "2022-03-21", present: true },
        { date: "2022-03-25", present: true },
        { date: "2022-03-29", present: false },
        { date: "2022-04-02", present: true },
        { date: "2022-04-06", present: true },
        { date: "2022-04-10", present: true },
        { date: "2022-04-14", present: true },
        { date: "2022-04-18", present: true },
        { date: "2022-04-22", present: true },
        { date: "2022-04-26", present: true },
        { date: "2022-04-30", present: true },
        { date: "2022-05-04", present: true },
        { date: "2022-05-08", present: true },
        { date: "2022-05-12", present: true },
        { date: "2022-05-16", present: true },
        { date: "2022-05-20", present: null },
        { date: "2022-05-24", present: null },
        { date: "2022-05-28", present: null },
        { date: "2022-06-01", present: null },
      ],
    },
    {
      unit: "Comp 190",
      attendance: [
        { date: "2022-03-01", present: true },
        { date: "2022-03-05", present: false },
        { date: "2022-03-09", present: true },
        { date: "2022-03-13", present: true },
        { date: "2022-03-17", present: true },
        { date: "2022-03-21", present: true },
        { date: "2022-03-25", present: true },
        { date: "2022-03-29", present: true },
        { date: "2022-04-02", present: true },
        { date: "2022-04-06", present: true },
        { date: "2022-04-10", present: true },
        { date: "2022-04-14", present: true },
        { date: "2022-04-18", present: true },
        { date: "2022-04-22", present: true },
        { date: "2022-04-26", present: true },
        { date: "2022-04-30", present: true },
        { date: "2022-05-04", present: true },
        { date: "2022-05-08", present: true },
        { date: "2022-05-12", present: true },
        { date: "2022-05-16", present: true },
        { date: "2022-05-20", present: null },
        { date: "2022-05-24", present: null },
        { date: "2022-05-28", present: null },
        { date: "2022-06-01", present: null },
      ],
    },
    {
      unit: "Phy 105",
      attendance: [
        { date: "2022-03-01", present: true },
        { date: "2022-03-05", present: false },
        { date: "2022-03-09", present: true },
        { date: "2022-03-13", present: true },
        { date: "2022-03-17", present: true },
        { date: "2022-03-21", present: true },
        { date: "2022-03-25", present: true },
        { date: "2022-03-29", present: false },
        { date: "2022-04-02", present: true },
        { date: "2022-04-06", present: true },
        { date: "2022-04-10", present: true },
        { date: "2022-04-14", present: true },
        { date: "2022-04-18", present: true },
        { date: "2022-04-22", present: true },
        { date: "2022-04-26", present: true },
        { date: "2022-04-30", present: true },
        { date: "2022-05-04", present: false },
        { date: "2022-05-08", present: true },
        { date: "2022-05-12", present: true },
        { date: "2022-05-16", present: true },
        { date: "2022-05-20", present: null },
        { date: "2022-05-24", present: null },
        { date: "2022-05-28", present: null },
        { date: "2022-06-01", present: null },
      ],
    },
    {
      unit: "Phil 100",
      attendance: [
        { date: "2022-03-01", present: true },
        { date: "2022-03-05", present: false },
        { date: "2022-03-09", present: true },
        { date: "2022-03-13", present: true },
        { date: "2022-03-17", present: true },
        { date: "2022-03-21", present: true },
        { date: "2022-03-25", present: true },
        { date: "2022-03-29", present: false },
        { date: "2022-04-02", present: true },
        { date: "2022-04-06", present: true },
        { date: "2022-04-10", present: true },
        { date: "2022-04-14", present: false },
        { date: "2022-04-18", present: true },
        { date: "2022-04-22", present: true },
        { date: "2022-04-26", present: true },
        { date: "2022-04-30", present: true },
        { date: "2022-05-04", present: true },
        { date: "2022-05-08", present: true },
        { date: "2022-05-12", present: true },
        { date: "2022-05-16", present: true },
        { date: "2022-05-20", present: null },
        { date: "2022-05-24", present: null },
        { date: "2022-05-28", present: null },
        { date: "2022-06-01", present: null },
      ],
    },
  ];
  return (
    <div className="w-[95%] bg-slate-50 mt-4 rounded-2xl p-4">
      <h3 className="text-3xl font-thin text-green-800">
        Your attendance Report
      </h3>
      <br />
      <br />
      <div className="w-full flex items-center justify-between px-2 pb-5 text-xl font-light text-slate-600">
        <h2>code</h2>
        <h2>Class Number</h2>
      </div>
      <div className="w-full mx-auto ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-500">
            <tr>
              <th
                scope="col"
                className="text-left bg-green-100 py-3 pl-3 font-bold text-green-800  uppercase tracking-wider"
              >
                Unit
              </th>
              {numbers.map((number) => (
                <th
                  key={number}
                  scope="col"
                  className=" text-left bg-gray-100 text-green-900 font-bold uppercase tracking-wider"
                >
                  {number}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" divide-y my-3 divide-green-50">
            {reportData.map((report, index) => (
              <tr
                key={index}
                className={`p-2 ${index % 2 == 0 ? "bg-white" : "bg-slate-50"}`}
              >
                <td
                  key={report.unit}
                  className="whitespace-nowrap py-3 pl-3 font-bold text-green-800"
                >
                  {report.unit}
                </td>
                {report.attendance.map((number) => (
                  <td key={number} className="" title={number.date}>
                    {number.present != null ? (
                      <i
                        class={`fa-solid ${
                          number.present
                            ? "fa-check text-green-400"
                            : "text-red-400 fa-ban"
                        }`}
                      ></i>
                    ) : (
                      <i class="fa-solid fa-notdef text-slate-300"></i>
                    )}
                  </td>
                ))}{" "}
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <i className="text-slate-500 text-sm">
        {" "}
        This is your attendance for the current semester
      </i>
      <br />
      <br />
      <span className="flex items-center">
        <i className="fa-solid fa-check text-green-400"></i> &nbsp;&nbsp;
        <i className="text-slate-500 text-sm"> Attended class</i>
      </span>
      <span className="flex items-center">
        <i className="fa-solid text-red-400 fa-ban"></i> &nbsp;&nbsp;
        <i className="text-slate-500 text-sm"> Missed class</i>
      </span>
      <span className="flex items-center">
        <i className="fa-solid fa-notdef text-slate-300"></i> &nbsp;&nbsp;
        <i className="text-slate-500 text-sm"> Future classes</i>
      </span>
    </div>
  );
}
