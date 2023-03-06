import React from "react";
import Layout from "../../components/landing/Layout";
import SignupPage from "../../components/studentAuth/Signup";

export default function Signup() {
  return (
    <div>
      <Layout>
        <span
          id="left"
          className="md:w-full w-1/2 flex flex-col justify-center items-center  p-4"
        >
          <SignupPage />
        </span>
        <span
          id="right"
          className="md:w-full w-1/2 flex flex-col items-center bg-green-400/10"
        ></span>
      </Layout>
    </div>
  );
}
