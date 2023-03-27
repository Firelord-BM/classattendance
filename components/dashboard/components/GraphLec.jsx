// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const PieChart = ({ data, options }) => {
//   const chartContainer = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     if (chartContainer && chartContainer.current) {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }

//       chartInstance.current = new Chart(chartContainer.current, {
//         type: "pie",
//         data: data,
//         options: options,
//       });
//     }
//   }, [data, options]);

//   return (
//     <div style={{ width: "300px", height: "300px" }}>
//       {" "}
//       <canvas ref={chartContainer} />
//     </div>
//   );
// };
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ value, title }) => {
  const data = {
    labels: ["Attended Classes", "Missed Classes"],
    datasets: [
      {
        label: "students",
        data: value,
        backgroundColor: ["#4ade80", "#f87171"],
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: title,
        fontSize: 18,
        fontColor: "#333",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: "center",
      },
    },
  };
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Doughnut data={data} options={options} />{" "}
    </div>
  );
};

export default function GraphLec() {
  return (
    <div className="w-full flex-1 flex flex-wrap items-center justify-between">
      <DoughnutChart value={[300, 40]} title="Comp 100 Attendance" />
      <DoughnutChart value={[300, 0]} title="Comp 200 Attendance" />
      <DoughnutChart value={[400, 4]} title="Comp 400 Attendance" />
      <DoughnutChart value={[350, 20]} title="Comp 300 Attendance" />
      {/* <DoughnutChart />
      <DoughnutChart />
      <DoughnutChart /> */}
    </div>
  );
}
