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

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const DataVisualization = () => {
	const data = {
		labels: ["Label1", "Label2", "Label3"],
		datasets: [
			{
				label: "Dataset 1",
				data: [10, 20, 30],
				backgroundColor: [
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		indexAxis: "y",
		plugins: {
			legend: {
				position: "right",
			},
			title: {
				display: true,
				text: "Horizontal Bar Chart",
			},
		},
		scales: {
			x: {
				beginAtZero: true,
			},
		},
	};

	return (
		<div>
			<Bar data={data} options={options} />
		</div>
	);
};

export default DataVisualization;
