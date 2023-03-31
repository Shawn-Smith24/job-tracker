import React from "react";
import { JobsContext, useJobs } from "./ContextProviders/JobsContext";
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

const BarChart = ({ colors, experienceCount }) => {
	const data = {
		labels: ["Junior", "Mid-Level", "Senior"],
		datasets: [
			{
				label: "Dataset 1",
				data: experienceCount,
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
				grid: {
					color: `${colors.secondary}`,
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
				grid: {
					color: `${colors.secondary}`,
				},
			},
		},
	};

	return (
		<>
			<Bar data={data} options={options} />
		</>
	);
};

export default BarChart;
