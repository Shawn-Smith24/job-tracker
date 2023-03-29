import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { generateColorVariations } from "../helpers/generateColorVariations";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ colors }) => {
	const accentVariations = generateColorVariations(colors.accent);

	const data = {
		labels: ["Label 1", "Label 2", "Label 3"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3],
				backgroundColor: [
					`${accentVariations[0]}`,
					`${accentVariations[1]}`,
					`${accentVariations[2]}`,
				],
				borderColor: [
					`${accentVariations[0]}`,
					`${accentVariations[1]}`,
					`${accentVariations[2]}`,
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				display: true,
				position: "right",
				labels: {
					color: `${colors.info}`,
				},
			},
			title: {
				display: true,
				text: "Doughnut Chart Title",
				font: {
					size: 20,
				},
				color: `${colors.info}`,
			},
		},
	};

	return <Doughnut data={data} options={options} />;
};

export default DonutChart;
