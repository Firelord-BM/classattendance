import React from "react";
import Layout from "../../components/landing/Layout";
import LoginPage from "../../components/staffAuth/Login";
import Meta from "../../components/Meta";

export default function students() {
  return (
    <div>
      <Layout>
        <Meta title="Staff Login" />
        <span className="md:w-full w-1/2 flex flex-col justify-center items-center  p-4">
          <LoginPage />
        </span>
        <span
          id="right"
          className="md:w-full w-1/2 flex flex-col items-center bg-green-400/10"
        ></span>
      </Layout>
    </div>
  );
}
