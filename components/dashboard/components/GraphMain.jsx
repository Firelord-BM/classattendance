import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphMain = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const chartConfig = {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "trend",
            data: data.values,
            fill: false,
            borderColor: "rgb(74, 222, 128)",
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
          y: {
            title: {
              display: true,
              text: " Attendance per class",
            },
          },
        },
      },
    };

    const chart = new Chart(chartRef.current, chartConfig);
    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="bg-slate-100 p-8 rounded-2xl">
      <h3>Attendance Trend</h3>
      <canvas ref={chartRef} />
    </div>
  );
};

export default GraphMain;
