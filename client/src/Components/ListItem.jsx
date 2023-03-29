import React from "react";
import { useState } from "react";

const ListItem = ({ job, company }) => {
	const [applicationId, setApplicationId] = useState(null);

	function showJobDetails() {
		console.log("showJobDetails");
	}

	return (
		<li
			className="flex py-4 border-b border-b-secondary group hover:border-b-accent hover:bg-accent transition cursor-pointer"
			onClick={(e) => showJobDetails(e)}>
			<div className="ml-3">
				<p className="font-medium text-info text-lg font-display group-hover:text-primary transition">
					{company.companyName}
				</p>
				<p className="text-sm text-secondary group-hover:text-primary transition">
					{job.role}
				</p>
			</div>
		</li>
	);
};

export default ListItem;
