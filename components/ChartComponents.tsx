import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      position: "bottom",
      align: "end",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      beginAtZero: true,
      stacked: true,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Oktober",
  "November",
  "Desember",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Order",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#BB2436",
      borderWidth: 0,
      borderRadius: 20,
    },
    {
      label: "Form",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(187, 36, 54, 0.3)",
      borderWidth: 0,
      borderRadius: 20,
    },
  ],
};

export function ChartComponents() {
  return <Bar options={options as any} data={data} />;
}
