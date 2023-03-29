import React from "react";
import List from "../Components/List";
import { useState } from "react";
import JobDetailSection from "../Components/JobDetailSection";
import Navigation from "../Components/Navigation";
import Modal from "../Components/Modal";
import ModalContext from "../Components/ModalContext";
import { useContext, useEffect } from "react";

/**
 * Strategy:
 * 1. Instead of fetching all of the different data, we need to take the user's backrefed property
 * of applications and set them in a state called "applications".
 * 2. for each application, do a fetch request to /jobs/<int:job_id> and store in state jobs
 */
const BASE_URL = process.env.REACT_APP_MOCK_API_URL;
const Dashboard = () => {
	const { showModal } = useContext(ModalContext); // Access showModal from the context
	const [companies, setCompanies] = useState(null);

	// TODO: use the backref property of the current user to get list of application objects
	// const [applications, setApplications] = useState(null);
	// TODO: for each application, do a fetch request to /jobs/<int:job_id> and store in state jobs
	// const [jobs, setJobs] = useState(null);

	const [offer, setOffer] = useState({
		role: "Frontend Engineer",
		company: "Apple",
		location: "Atlanta, GA",
		salary: 80000,
		expLevel: 1,
		isRemote: "No",
	});

	useEffect(() => {
		console.log("dashboard loading...");
		fetch(`${BASE_URL}/companies`)
			.then((response) => response.json())
			.then((companiesList) => {
				setCompanies(companiesList);
			});
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
				{companies && (
					<div className="w-full h-full flex flex-row">
						<div className="w-96 h-full shadow-lg border-r border-r-secondary">
							<List offer={offer} />{" "}
						</div>
						<JobDetailSection />
					</div>
				)}
			</div>
		</>
	);
};
export default Dashboard;
