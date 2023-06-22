import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the bar graph
    const data = {
      labels: [
        'ANDHRA PRADESH',
        'ARUNACHAL PRADESH',
        'ASSAM',
        'BIHAR',
        'CHANDIGARH',
        'CHHATTISGARH',
        'DADRA AND NAGAR HAVELI',
        'GOA',
        'GUJARAT',
        'HARYANA',
        'HIMACHAL PRADESH',
        'JAMMU AND KASHMIR',
        'JHARKHAND',
        'KARNATAKA',
        'KERALA',
        'MADHYA PRADESH',
        'MAHARASHTRA',
        'MANIPUR',
        'NAGALAND',
        'NEW DELHI',
        'ODISHA',
        'PONDICHERRY',
        'PUNJAB',
        'RAJASTHAN',
        'SIKKIM',
        'TAMIL NADU',
        'TELANGANA',
        'UTTAR PRADESH',
        'UTTARAKHAND',
        'WEST BENGAL',
      ],
      datasets: [
        {
          label: 'Number of Cases',
          data: [
            21, 1, 6, 19, 1, 8, 1, 2, 42, 19, 1, 2, 9, 28, 31, 29, 597, 4, 1,
            137, 19, 5, 24, 72, 1, 95, 10, 162, 5, 47,
          ],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Bar color
          borderColor: 'rgba(54, 162, 235, 1)', // Border color
          borderWidth: 1, // Border width
        },
      ],
    };

    // Chart configuration
    const config = {
      type: 'bar',
      data: data,
      options: {
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            font: {
              weight: 'bold',
            },
            formatter: function(value) {
              return value;
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    // Create the bar chart
    const chart = new Chart(chartRef.current, config);

    return () => {
      // Cleanup chart instance on component unmount
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarGraph;
