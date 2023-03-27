import React from "react";
import Layout from "../components/dashboard/layout";
import RegisterP from "../components/dashboard/components/RegisterP";

export default function RegisterPage() {
  const role = parseInt(localStorage.getItem("role"));
  return (
    <Layout>
      <RegisterP role={role} />
    </Layout>
  );
}
