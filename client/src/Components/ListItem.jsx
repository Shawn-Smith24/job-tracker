import React from "react";
import { useState } from "react";
// List item is essentially an instance of application
const ListItem = ({ job, company }) => {
	const [applicationId, setApplicationId] = useState(null);
	function showJobDetails() {
		console.log("showJobDetails");
	}
	return (
		<li className="flex py-4">
			<div className="ml-3 cursor-pointer" onClick={(e) => showJobDetails(e)}>
				<p className="font-medium text-info text-lg font-display">
					{company.companyName}
				</p>
				<p className="text-sm text-gray-500">{job.role}</p>
			</div>
		</li>
	);
};

export default ListItem;
