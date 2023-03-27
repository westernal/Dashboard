import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Order 1", "Order 2", "Order 3", "Order 4"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 10, 5],
      backgroundColor: ["red", "blue", "darkslateblue", "yellow"],
      borderWidth: 1,
    },
  ],
};

const PolarChart = () => {
  return <PolarArea data={data} />;
};

export default PolarChart;
