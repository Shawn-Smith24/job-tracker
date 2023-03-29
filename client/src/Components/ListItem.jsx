import React from "react";
import { motion } from "framer-motion";

const ListItem = ({ job, company, application, setDisplayedApp }) => {
	function showJobDetails() {
		console.log("showJobDetails");
		setDisplayedApp(application);
	}

	return (
		<motion.li
			className="relative flex py-4 border-b border-b-secondary group hover:border-b-accent hover:bg-accent transition cursor-pointer"
			onClick={(e) => showJobDetails(e)}>
			{/* [ ] implement delete functionality */}
			<svg
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
					{job.role}
				</p>
			</div>
		</motion.li>
	);
};

export default ListItem;
