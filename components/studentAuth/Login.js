import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import C from "../../const.json";
export default function LoginPage() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const url = C.API + "auth/login/student";
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ regNo: registrationNumber, password }),
      });
      const data = await response.json();
      if (response.ok) {
        let student = data.student;
        // console.log(student);
        localStorage.setItem("reg", student.registrationNumber);
        localStorage.setItem("fName", student.firstName);
        localStorage.setItem("lName", student.lastName);
        localStorage.setItem("email", student.email);
        localStorage.setItem("year", student.year);
        localStorage.setItem("role", student.role);
        localStorage.setItem("sem", student.semester);
        router.push("/dashboard");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-start mt-8 mb-8" data-aos="fade-right">
      <h3 className="text-3xl font-bold mb-4">Student Login</h3>
      <p className="text-sm mb-4">
        Please enter your registration number and password to log in.
      </p>

      {error && <p className="text-red-500">{error}</p>}
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-green-500 font-bold mb-2"
            htmlFor="registrationNumber"
          >
            Registration Number
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="registrationNumber"
            type="text"
            placeholder="Enter your registration number"
            required
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-green-500 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Log In
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link
          href="/students/signup"
          className="text-green-400 hover:text-green-700"
        >
          Sign up here
        </Link>
        .
      </p>
    </div>
  );
}
