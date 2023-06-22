import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const createChart = () => {
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
      };

      const chartData = {
        labels: [
          "Agro",
          "Exports",
          "Organic",
          "Fisheries",
          "Credit",
          "Health",
          "Bank",
          "Vehicle Service",
          "Hospital",
          "Housing",
          "Others",
        ],
        datasets: [
          {
            data: [450, 120, 132, 53, 47, 80, 66, 37, 40, 60, 90],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF9F40",
              "#4BC0C0",
              "#9966FF",
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF9F40",
              "#4BC0C0",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF9F40",
              "#4BC0C0",
              "#9966FF",
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF9F40",
              "#4BC0C0",
            ],
          },
        ],
      };
      

      const ctx = chartRef.current.getContext("2d");

      // Destroy previous chart instance if it exists
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create new chart instance
      chartInstance = new Chart(ctx, {
        type: "doughnut",
        data: chartData,
        options: chartOptions,
      });
    };

    createChart();

    // Cleanup function to destroy chart instance on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas style={{width: "300px"}} ref={chartRef} />;
};

export default DoughnutChart;
