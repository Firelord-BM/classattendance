import { useState } from "react";
import React from "react";

const PForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, phoneNumber, email });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 w-full">
      <div className="w-full flex items-start justify-between">
        <div className="input-wrapper">
          <label htmlFor="firstName"> First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName"> Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="w-full flex items-start justify-between">
        <div className="input-wrapper">
          <label htmlFor="Email"> Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName"> Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="w-full flex items-start justify-between">
        <div className="input-wrapper">
          <label htmlFor="Email"> year</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName"> Semester</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <br />
      <br />
      <button type="submit" id="button">
        Update
      </button>
    </form>
  );
};

export default PForm;
