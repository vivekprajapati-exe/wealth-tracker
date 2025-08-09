'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'rgb(156, 163, 175)',
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(75, 85, 99, 0.2)',
      },
      ticks: {
        color: 'rgb(156, 163, 175)',
      },
    },
    y: {
      grid: {
        color: 'rgba(75, 85, 99, 0.2)',
      },
      ticks: {
        color: 'rgb(156, 163, 175)',
      },
    },
  },
};

export default function LineChart({ data }) {
  return <Line options={options} data={data} />;
}
