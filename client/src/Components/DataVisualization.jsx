import React from "react";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import AverageSalary from "./AverageSalary";
const DataVisualization = () => {
	const colors = {
		primary: "#273248",
		secondary: "#69758C",
		info: "#F0F0F0",
		accent: "#e88060",
	};
	return (
		<div className="w-full p-4 h-full flex flex-col justify-center items-center ">
			<div className="w-full h-1/2 flex flex-row justify-center items-center">
				<BarChart colors={colors} />
			</div>
			<div className="h-1/2 w-full flex flex-row justify-around mt-4">
				<div className="w-full h-fit flex flex-col justify-center items-center">
					<h2
						className="
						text-xl text-center
						lg:text-2xl font-display">
						Application Statuses
					</h2>
					<DonutChart colors={colors} />
				</div>
			</div>
			<AverageSalary />
		</div>
	);
};

export default DataVisualization;
