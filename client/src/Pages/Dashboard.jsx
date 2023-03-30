import React from "react";
import List from "../Components/List";
import { useState } from "react";
import JobDetailSection from "../Components/JobDetailSection";
import Navigation from "../Components/Navigation";
import Modal from "../Components/Modal";
import ModalContext from "../Components/ContextProviders/ModalContext";
import { useContext, useEffect } from "react";
import { useApplications } from "../Components/ContextProviders/ApplicationsContext";

import dummyJobs from "../DummyData/jobs.json";
import dummyCompanies from "../DummyData/companies.json";

const Dashboard = () => {
	const { showModal } = useContext(ModalContext); // Access showModal from the context
	const { applications, setApplications } = useApplications();

	const [jobs, setJobs] = useState(null);
	const [companies, setCompanies] = useState(null);
	const [displayedContent, setDisplayedContent] = useState({
		jobName: "",
		companyName: "",
		salary: "",
		expLevel: "",
		location: "",
	});

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

	useEffect(() => {}, [displayedContent]);
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
				{showModal && <Modal />}
				{companies && jobs && applications && displayedContent && (
					<div
						className="
						w-full h-full flex flex-row">
						<div className="w-1/4 h-full shadow-lg border-r border-r-secondary">
							<List
								applications={applications}
								setDisplayedContent={setDisplayedContent}
								displayedContent={displayedContent}
							/>{" "}
						</div>
						<JobDetailSection displayedContent={displayedContent} />
					</div>
				)}
			</div>
		</>
	);
};
export default Dashboard;
