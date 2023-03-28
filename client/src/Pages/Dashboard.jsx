import React from "react";
import List from "../Components/List";
import { useState } from "react";
import JobDetailSection from "../Components/JobDetailSection";
import Navigation from "../Components/Navigation";
const Dashboard = () => {
	const [offer, setOffer] = useState({
		role: "Frontend Engineer",
		company: "Apple",
		location: "Atlanta, GA",
		salary: 80000,
		expLevel: 1,
		isRemote: "No",
	});
	return (
		<>
			<div className="w-full h-full flex flex-col">
				<Navigation />

				<div className="w-full h-full flex flex-row">
					<div className="w-96 h-full shadow-lg">
						<List offer={offer} setOffer={setOffer} />
					</div>
					<JobDetailSection />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
