import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { generateColorVariations } from "../helpers/generateColorVariations";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ colors }) => {
	const accentVariations = generateColorVariations(colors.accent);

	const data = {
		labels: ["Applied", "Interview Phase", "Offer Given"],
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
		},
	};

	return (
		<div className="w-full h-fit ">
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default DonutChart;
