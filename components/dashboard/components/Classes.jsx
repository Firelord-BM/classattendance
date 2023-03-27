import React from "react";
import ClassesRegisted from "./ClassesRegisted";
import Link from "next/link";
import ClassesRegistedLecturer from "./ClassesRegistedLecturer";

export default function Classes() {
  const role = parseInt(localStorage.getItem("role"));
  return (
    <div className="bg-slate-100 rounded-2xl px-3 py-5">
      {role === 0 ? <ClassesRegisted /> : <ClassesRegistedLecturer />}

      <br />
      {role === 0 ? (
        <Link href="/register">
          <button>Register</button>
        </Link>
      ) : (
        <Link href="/attendance">
          <button>View Attendance</button>
        </Link>
      )}
    </div>
  );
}
