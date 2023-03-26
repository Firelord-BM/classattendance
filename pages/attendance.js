import React from "react";

import Layout from "../components/dashboard/layout";
import AttendanceReport from "../components/dashboard/components/AttendanceReport";

export default function AttendancePage() {
  return (
    <Layout>
      <AttendanceReport />
    </Layout>
  );
}
