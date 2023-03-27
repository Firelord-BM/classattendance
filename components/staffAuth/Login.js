import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import C from "../../const.json";
export default function LoginPage() {
  const [staffNumber, setStaffNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const url = C.API + "auth/login/staff";
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ staffNo: staffNumber, password: password }),
      });
      const data = await response.json();
      if (response.ok) {
        let staff = data.staff;
        console.log(staff);
        localStorage.setItem("reg", staff.staffNo);
        localStorage.setItem("fName", staff.firstName);
        localStorage.setItem("lName", staff.lastName);
        localStorage.setItem("email", staff.email);
        localStorage.setItem("role", staff.role);
        router.push("/dashboard");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Log In</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="registrationNumber"
          >
            Staff Number
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="registrationNumber"
            type="text"
            value={staffNumber}
            onChange={(e) => setStaffNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Log In
        </button>
      </form>

      <p className="mt-4">
        Don't have an account?{" "}
        <Link
          href="/staff/signup"
          className="text-green-400 hover:text-green-700"
        >
          Sign up here
        </Link>
        .
      </p>
    </div>
  );
}
