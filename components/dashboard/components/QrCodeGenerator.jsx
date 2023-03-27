import React, { useRef, useState, useEffect } from "react";
import { useQRCode } from "next-qrcode";
// import QRCode from "qrcode.react";

export default function QrCodeGenerator() {
  const [course, setCourse] = useState("COMP 100");
  const [day, setDay] = useState("Monday");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  //   const downloadQrCode = () => {
  //     const canvas = document.getElementById("qrcode");
  //     const pngUrl = canvas
  //       .toDataURL("image/png")
  //       .replace("image/png", "image/octet-stream");
  //     let downloadLink = document.createElement("a");
  //     downloadLink.href = pngUrl;
  //     downloadLink.download = "qrcode.png";
  //     document.body.appendChild(downloadLink);
  //     downloadLink.click();
  //     document.body.removeChild(downloadLink);
  //   };

  const { Image, canvas } = useQRCode();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef && canvasRef.current && canvas) {
      canvasRef.current.appendChild(canvas);
    }
  }, [canvas]);

  const downloadQRCode = () => {
    const dataURL = canvasRef.current.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleSubmit = (e) => {
    console.log({ course, day, startTime, endTime });
    e.preventDefault();
    setShowQRCode(true);
  };

  const fName =
    localStorage.getItem("fName") + " " + localStorage.getItem("lName");
  const reg = localStorage.getItem("reg");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const sem = localStorage.getItem("sem");
  const year = localStorage.getItem("year");
  return (
    <div className="w-full ">
      <div
        id="profile-banner"
        className=" h-[350px] w-full  rounded-bl-2xl rounded-br-2xl"
      />
      <div
        id="cardWrapper"
        className="w-[95%] flex mt-[-150px] mx-auto justify-between"
      >
        <div
          id="user"
          className="w-1/4 rounded-2xl bg-white border-2 flex flex-col items-center p-4"
        >
          <div className="w-[150px] h-[150px] overflow-hidden  rounded-full bg-green-400">
            {" "}
            <img src="/jane.jpg" width="100%" alt="" />{" "}
          </div>
          <br />
          <h1 className="font-black text-green-900 text-2xl">{fName}</h1>
          <h2 className="font-medium text-green-700 text-sm">{reg}</h2>
          <br />
          <ul className="w-full">
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Date Of Birth</h4>
              <p>01/18/2001</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Email</h4>
              <p>{email}</p>
            </li>
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Phone</h4>
              <p>{phone}</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Year</h4>
              <p>{year}</p>
            </li>
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Semester</h4>
              <p>{sem}</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Gender</h4>
              <p>Female</p>
            </li>
            <li className="bg-slate-50 flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Faculty</h4>
              <p>Science</p>
            </li>
            <li className="bg-white flex items-center justify-between py-2 px-1 w-full ">
              <h4 className="text-sm text-green-800">Department</h4>
              <p>Computer Sci</p>
            </li>
          </ul>
        </div>
        <div className="flex-1 md:ml-6 rounded-2xl bg-white border-2 flex flex-col items-center p-4">
          <h3>Create a qr-code </h3>
          <br />
          <div className="w-full flex items-center justify-between">
            <div className="w-1/2">
              <form onSubmit={handleSubmit} className="mt-5 w-full">
                <div className="input-wrapper2">
                  <label htmlFor="course">Course</label>
                  <select
                    name="course"
                    id="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  >
                    <option value="">Select a course</option>
                    <option value="COMP 100">COMP 100</option>
                    <option value="COMP 200">COMP 200</option>
                    <option value="COMP 300">COMP 300</option>
                  </select>
                </div>
                <br />
                <br />
                <div className="input-wrapper2">
                  <label htmlFor="day">Day of the week</label>
                  <select
                    name="day"
                    id="day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="select"
                  >
                    <option value="">Select a day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                  </select>
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
            </div>
            {showQRCode && (
              <div className="w-1/3 flex flex-col items-center" id="qrcode">
                {/* <QRCode
                  id="canvas"
                  value={`Course: ${course}\nDay: ${day}\nStart Time: ${startTime}\nEnd Time: ${endTime}`}
                  size={250}
                  level={"H"}
                  includeMargin={true}
                /> */}
                <Image
                  text={"https://github.com/bunlong/next-qrcode"}
                  options={{
                    type: "image/jpeg",
                    quality: 0.3,
                    level: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                      dark: "#010599FF",
                      light: "#FFBF60FF",
                    },
                  }}
                />
                <br />
                <br />
                <div ref={canvasRef} style={{ display: "none" }}></div>
                <button onClick={downloadQRCode}>Download QR Code</button>

                {/* <button onClick={downloadQrCode}>Download QR Code</button> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
