import React from "react";
import ClassesRegisted from "./ClassesRegisted";
import Link from "next/link";
import ClassesRegistedLecturer from "./ClassesRegistedLecturer";

export default function Classes() {
  const role = parseInt(localStorage.getItem("role"));
  return (
    <div className="bg-slate-100 rounded-2xl px-3 py-5 max-w-6xl mx-auto">
      {role === 0 ? <ClassesRegisted /> : <ClassesRegistedLecturer />}

      <br />
      <div className="flex justify-center">
        <Link href={role === 0 ? "/register" : "/attendance"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {role === 0 ? "Register" : "View Attendance"}
          </button>
        </Link>
      </div>
    </div>
  );
}