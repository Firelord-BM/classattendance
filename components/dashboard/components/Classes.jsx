import React from "react";
import ClassesRegisted from "./ClassesRegisted";
import Link from "next/link";

export default function Classes() {
  return (
    <div className="bg-slate-100 rounded-2xl px-3 py-5">
      <h3>Classes Registered</h3>
      <br />

      <ClassesRegisted />
      <br />
      <Link href="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}
