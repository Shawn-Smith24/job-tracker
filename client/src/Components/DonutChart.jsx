import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { generateColorVariations } from "../helpers/generateColorVariations";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ colors, applications }) => {
	const statusCounts = [0, 0, 0, 0];

	applications.reduce((acc, app) => {
		acc[app.status]++;
		return acc;
	}, statusCounts);

	console.log("statusCounts", statusCounts);

	const labels = [
		"Applied",
		"Interviewing",
		"Offer Given",
		"Application Rejected",
	];
	const accentVariations = generateColorVariations(colors.accent);
	const data = {
		labels: labels,
		datasets: [
			{
				label: "# of Applications",
				// applied, interviewing, offer given, rejected
				data: statusCounts,
				backgroundColor: [
					`${accentVariations[0]}`,
					`${accentVariations[1]}`,
					`${accentVariations[2]}`,
					`${accentVariations[3]}`,
				],
				borderColor: [
					`${accentVariations[0]}`,
					`${accentVariations[1]}`,
					`${accentVariations[2]}`,
					`${accentVariations[3]}`,
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		aspectRatio: 2, // Set the aspect ratio here
		layout: {
			padding: 0, // Remove padding around the chart content
		},
		plugins: {
			legend: {
				display: true,
				position: "right",
				labels: {
					color: `${colors.info}`,
				},
			},
		},
	};

	return (
		<div className="w-full h-60 mt-6">
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default DonutChart;
