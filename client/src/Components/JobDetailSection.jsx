import React from "react";
import companies from "../DummyData/companies.json";
import jobs from "../DummyData/jobs.json";

const JobDetailSection = () => {
	return (
		<div className="relative w-full text-info p-4">{applicationCard()}</div>
	);
	function applicationCard() {
		const experience = ["Apprentice", "Jr", "Mid-Level", "Sr"];
		return (
			<div className="absolute w-4/5 full h-4/5 p-8 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
				<h2 className="font-display text-6xl w-full text-center">
					{jobs[0].role}
				</h2>
				<ul className="text-center mt-12">
					<li>
						<strong>Company: </strong>
						{companies[0].companyName}
					</li>
					<li>
						<strong>Location: </strong>
						{jobs[0].location}
					</li>
					<li>
						<strong>Salary: </strong>${jobs[0].salary}
					</li>
					<li>
						<strong>Experience Level: </strong>
						{experience[jobs[0].expLevel]}
					</li>
					<li>
						<strong>Is Remote? : </strong>
						No
					</li>
				</ul>
				<div>
					<h2 className="font-display text-4xl text-center mt-12">
						Offer Status
					</h2>
					<p className="text-center mt-12">Awaiting Response ...</p>
				</div>
			</div>
		);
	}
};

export default JobDetailSection;
