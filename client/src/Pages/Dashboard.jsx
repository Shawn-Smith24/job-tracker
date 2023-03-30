import React from "react";
import List from "../Components/List";
import JobDetailSection from "../Components/JobDetailSection";
import Navigation from "../Components/Navigation";
import Modal from "../Components/Modal";
import ModalContext from "../Components/ContextProviders/ModalContext";
import { useContext, useEffect, useState } from "react";
import { useApplications } from "../Components/ContextProviders/ApplicationsContext";
import { useJobs } from "../Components/ContextProviders/JobsContext";
import { useCompanies } from "../Components/ContextProviders/CompaniesContext";
import dummyCompanies from "../DummyData/companies.json";

const Dashboard = () => {
	const { showModal } = useContext(ModalContext); // Access showModal from the context
	const { applications, setApplications } = useApplications();
	const { jobs } = useJobs(); // Retrieve jobs and setJobs from the context
	const { companies, setCompanies } = useCompanies();
	const [experienceCount, setExperienceCount] = useState([0, 0, 0]);
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
			});
	}

	useEffect(() => {}, [displayedContent]);
	useEffect(() => {
		// setJobs(dummyJobs);
		setCompanies(dummyCompanies);
	}, []);

	useEffect(() => {
		getApplications();
	}, []);
	console.log("EXPCOUNTTTTTTT", experienceCount);
	return (
		<>
			<div className="w-full h-full flex flex-col">
				<Navigation />
				{showModal && <Modal />}{" "}
				{jobs && applications && displayedContent && (
					<div className="w-full h-full flex flex-row">
						<div className="w-1/4 h-full shadow-lg border-r border-r-secondary">
							<List
								applications={applications}
								setDisplayedContent={setDisplayedContent}
								displayedContent={displayedContent}
								setExperienceCount={setExperienceCount}
							/>
						</div>
						<JobDetailSection displayedContent={displayedContent} />
					</div>
				)}
			</div>
		</>
	);
};

export default Dashboard;
