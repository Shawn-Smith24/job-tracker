import React from "react";
import List from "../Components/List";
import JobDetailSection from "../Components/JobDetailSection";
const Dashboard = () => {
	return (
		<div className="w-full h-full flex flex-row">
			<div className="w-96 h-full shadow-lg">
				<List />
			</div>
			<JobDetailSection />
		</div>
	);
};

export default Dashboard;
