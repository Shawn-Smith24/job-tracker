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

const colors = {
	primary: "#273248",
	secondary: "#69758C",
	info: "#F0F0F0",
	accent: "#e88060",
};

const DataVisualization = () => {
	const data = {
		labels: ["Junior", "Mid-Level", "Senior"],
		datasets: [
			{
				label: "Dataset 1",
				data: [2, 1, 1],
				backgroundColor: [
					`${colors.accent}`,
					`${colors.accent}`,
					`${colors.accent}`,
				],
				borderColor: [
					`${colors.accent}`,
					`${colors.accent}`,
					`${colors.accent}`,
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		indexAxis: "x",
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: "Experience Level",
				color: `${colors.info}`,
			},
		},
		scales: {
			x: {
				ticks: {
					color: `${colors.info}`,
				},
				title: {
					display: true,
					text: "Experience Level",
					color: `${colors.info}`,
				},
			},
			y: {
				beginAtZero: true,
				ticks: {
					stepSize: 1,
					color: `${colors.info}`,
				},
				title: {
					display: true,
					text: "Application Quantity",
					color: `${colors.info}`,
				},
			},
		},
	};

	return (
		<div className="w-full h-full p-4 flex flex-row justify-center items-center">
			<Bar data={data} options={options} />
		</div>
	);
};

export default DataVisualization;
