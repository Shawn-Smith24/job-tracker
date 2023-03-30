import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import AverageSalary from "./AverageSalary";
import { useApplications } from "./ContextProviders/ApplicationsContext";

const DataVisualization = () => {
	const { applications, setApplications } = useApplications();
	const [statusAggregate, setStatusAggregate] = useState({
		applied: 0,
		interview: 0,
		offer: 0,
		rejected: 0,
	});

	function updateStatuses() {
		if (applications) {
			applications.forEach((app) => {
				switch (app.status) {
					case 1:
						setStatusAggregate((prevState) => ({
							...prevState,
							applied: prevState.applied + 1,
						}));
						break;
					default:
						break;
				}
			});
		}
	}

	useEffect(() => {
		updateStatuses();
		console.log("updateStatuses", statusAggregate);
	}, [applications]);

	console.log("in the DataVisualization section", applications);
	const colors = {
		primary: "#273248",
		secondary: "#69758C",
		info: "#F0F0F0",
		accent: "#e88060",
	};
	return (
		<div className="w-full p-4 lg:h-[600px] flex flex-col justify-center items-center ">
			<div className="w-full h-1/2 flex flex-row justify-center items-center">
				<BarChart colors={colors} />
			</div>
			<div className="h-1/2 w-full flex flex-row justify-around mt-4">
				<div
					className="
					w-full h-fit flex flex-col justify-center items-center
					">
					<h2
						className="
						text-lg text-center
						md:text-xl
						xl:text-2xl font-display">
						Application Statuses
					</h2>
					<DonutChart colors={colors} applications={applications} />
				</div>
			</div>
			<AverageSalary />
		</div>
	);
};

export default DataVisualization;
