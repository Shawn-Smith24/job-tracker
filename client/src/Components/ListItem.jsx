import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useJobs } from "./ContextProviders/JobsContext";
import { useCompanies } from "./ContextProviders/CompaniesContext";
const ListItem = ({
	application,
	setDisplayedContent,
	updateExperienceCount,
	handleDelete,
}) => {
	const [job, setJob] = useState(null);
	const [company, setCompany] = useState(null);
	const { companies, setCompanies } = useCompanies();
	const { jobs, setJobs } = useJobs();

	function deleteApplication() {
		handleDelete();
	}

	function showJobDetails() {
		let applicationStatus = "";
		if (application.status === 0) {
			applicationStatus = "Applied";
		} else if (application.status === 1) {
			applicationStatus = "Interviewing";
		} else if (application.status === 2) {
			applicationStatus = "Offer Given";
		} else if (application.status === 3) {
			applicationStatus = "Application Rejected";
		}
		if (job) {
			setDisplayedContent({
				jobName: job.job_name,
				companyName: job.company.company_name,
				salary: job.salary,
				expLevel: job.experience_level,
				location: job.location,
				applicationStatus: applicationStatus,
			});
		}
	}

	useEffect(() => {
		fetch(`/jobs/${application.job_id}`)
			.then((res) => res.json())
			.then((job) => {
				setCompany(job.company);
				console.log("JOB EXP", job.experience_level);
				setCompanies(...companies, company);
				setJob(job);
				setJobs(...jobs, job);
				updateExperienceCount(job.experience_level);
			});
	}, [application]);

	return (
		<div>
			{job && company && (
				<motion.li
					className="relative flex py-4 border-b border-b-secondary group hover:border-b-accent hover:bg-accent transition cursor-pointer"
					onClick={(e) => showJobDetails(e)}>
					<svg
						onClick={deleteApplication}
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						className="bi bi-x-lg text-primary absolute right-0 top-0 m-2"
						viewBox="0 0 20 20">
						<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
					</svg>
					<div className="ml-3">
						<p className="font-medium text-info text-lg font-display group-hover:text-primary transition">
							{company.company_name}
						</p>
						<p className="text-sm text-secondary group-hover:text-primary transition">
							{job.job_name}
						</p>
					</div>
				</motion.li>
			)}
		</div>
	);
};

export default ListItem;
