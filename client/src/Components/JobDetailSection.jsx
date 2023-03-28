import React from "react";
import companies from "../DummyData/companies.json";
import jobs from "../DummyData/jobs.json";

const JobDetailSection = () => {
	return (
		<div className="relative border w-full text-info p-4">
			{applicationCard()}
		</div>
	);
	function applicationCard() {
		const experience = ["Apprentice", "Jr", "Mid-Level", "Sr"];
		return (
			<div className="absolute w-4/5 full h-4/5 bg-accent p-8">
				<h2 className="font-display text-6xl w-full text-center">
					{jobs[0].role}
				</h2>
				<ul className="border">
					<li>{companies[0].companyName}</li>
					<li>{jobs[0].location}</li>
					<li>{jobs[0].salary}</li>
					<li>{experience[jobs[0].expLevel]}</li>
				</ul>
			</div>
		);
	}
};

export default JobDetailSection;
