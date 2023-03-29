import React from "react";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";

const DataVisualization = () => {
	const colors = {
		primary: "#273248",
		secondary: "#69758C",
		info: "#F0F0F0",
		accent: "#e88060",
	};
	return (
		<div className="w-full h-full p-4 flex flex-col justify-center items-center">
			<div className="w-full h-1/2 flex flex-row justify-center items-center">
				<BarChart colors={colors} />
			</div>
			<div className="h-1/2 w-full">
				<DonutChart colors={colors} />
			</div>
		</div>
	);
};

export default DataVisualization;
