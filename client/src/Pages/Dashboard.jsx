import React from "react";
import List from "../Components/List";
import { useState } from "react";
import JobDetailSection from "../Components/JobDetailSection";
import Navigation from "../Components/Navigation";
import Modal from "../Components/Modal";
import ModalContext from "../Components/ModalContext";
import { useContext, useEffect } from "react";

import dummyApps from "../DummyData/applications.json";
import dummyJobs from "../DummyData/jobs.json";
import dummyCompanies from "../DummyData/companies.json";

const Dashboard = () => {
	const { showModal } = useContext(ModalContext); // Access showModal from the context
	const [applications, setApplications] = useState(null);

	const [jobs, setJobs] = useState(null);

	const [companies, setCompanies] = useState(null);

	const [displayedApp, setDisplayedApp] = useState(dummyApps[0]);
	function getApplications() {
		fetch("/users/1", {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		})
			.then((res) => res.json())
			.then((user) => {
				setApplications(user.applied);

				console.log("user", user);
			});
	}

	useEffect(() => {
		setJobs(dummyJobs);
		setCompanies(dummyCompanies);
	}, []);

	useEffect(() => {
		getApplications();
	}, []);

	console.log("companies List: ", companies);
	return (
		<>
			<div className="w-full h-full flex flex-col">
				<Navigation />
				{showModal && (
					<Modal className="absolute" style={{ display: "block" }} />
				)}
				{/* conditional rendering for companies route */}
				{companies && jobs && applications && (
					<div className="w-full h-full flex flex-row">
						<div className="w-96 h-full shadow-lg border-r border-r-secondary">
							<List
								applications={applications}
								setDisplayedApp={setDisplayedApp}
							/>{" "}
						</div>
						<JobDetailSection
							displayedApp={displayedApp}
							companies={companies}
							jobs={jobs}
						/>
					</div>
				)}
			</div>
		</>
	);
};
export default Dashboard;
