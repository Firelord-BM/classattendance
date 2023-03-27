import { useState } from "react";
import React from "react";

const ClassForm = () => {
  const [course, setCourse] = useState("");
  const [numOfClasses, setNumOfClasses] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ course, numOfClasses, dayOfWeek, time });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 w-full">
      <div className="w-full flex items-start justify-between">
        <div className="input-wrapper">
          <label htmlFor="course">Course</label>
          <select
            id="course"
            name="course"
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="COMP 100">COMP 100</option>
            <option value="COMP 200">COMP 200</option>
            <option value="COMP 300">COMP 300</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label htmlFor="numOfClasses">Number of Classes</label>
          <input
            type="number"
            name="numOfClasses"
            id="numOfClasses"
            min="1"
            max="5"
            onChange={(e) => setNumOfClasses(e.target.value)}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="w-full flex items-start justify-between">
        <div className="input-wrapper">
          <label htmlFor="dayOfWeek">Day of Week</label>
          <select
            id="dayOfWeek"
            name="dayOfWeek"
            onChange={(e) => setDayOfWeek(e.target.value)}
          >
            <option value="">Select Day of Week</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full flex items-start justify-between">
        <div className="input-wrapper">
          <label htmlFor="startTime">Start Time</label>
          <input
            type="time"
            name="startTime"
            id="startTime"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="endTime">End Time</label>
          <input
            type="time"
            name="endTime"
            id="endTime"
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>

      <br />
      <br />
      <button type="submit" id="button">
        Submit
      </button>
    </form>
  );
};

export default ClassForm;
