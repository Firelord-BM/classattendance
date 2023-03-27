import React from "react";
import StudentAttendanceReport from "./StudentAttendanceReport";
import StaffAttendanceReport from "./StaffAttendanceReport";

export default function AttendanceReport() {
  const role = parseInt(localStorage.getItem("role"));
  return (
    <div className="w-full flex items-center justify-center">
      {role === 0 ? <StudentAttendanceReport /> : <StaffAttendanceReport />}
    </div>
  );
}
