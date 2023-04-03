import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Comp 100", "Comp 200", "Comp 300", "Comp 400"],
    datasets: [
      {
        label: "Number of Students",
        data: [72, 102, 72, 49],
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
      },
    ],
  };

  const options = {
    legend: { display: false },
    title: {
      display: true,
      text: "Number of Students in Each Class",
      fontSize: 20,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
      <style jsx>{`
        .chart-container {
          position: relative;
          width: 100%;
          height: 300px;
        }
        
        @media screen and (min-width: 768px) {
          .chart-container {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default BarChart;