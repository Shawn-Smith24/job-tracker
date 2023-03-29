import React from "react";
import companies from "../DummyData/companies.json";
import jobs from "../DummyData/jobs.json";
import Timeline from "./Timeline";
const JobDetailSection = () => {
	return (
		<div className="relative w-full text-info p-4 bg-primary">
			{applicationCard()}
		</div>
	);
	function applicationCard() {
		const experience = ["Apprentice", "Jr", "Mid-Level", "Sr"];
		return (
			<div className="absolute w-4/5 full h-[600px] p-8 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-primary rounded-xl border border-secondary shadow-lg">
				<h2 className="font-display text-6xl w-full text-center text-accent">
					{jobs[0].role}
				</h2>
				<ul className="text-center mt-12">
					<li>
						<strong className="text-accent">Company</strong>:{" "}
						{companies[0].companyName}
					</li>
					<li>
						<strong className="text-accent">Location</strong>:{" "}
						{jobs[0].location}
					</li>
					<li>
						<strong className="text-accent">Salary</strong>: ${jobs[0].salary}
					</li>
					<li>
						<strong className="text-accent">Experience Level</strong>:{" "}
						{experience[jobs[0].expLevel]}
					</li>
					<li>
						<strong className="text-accent">Is Remote?</strong>: No
					</li>
				</ul>
				<div>
					<h2 className="font-display text-4xl text-center mt-12 text-accent">
						Application Status
					</h2>
				</div>
				<Timeline />
			</div>
		);
	}
};

export default JobDetailSection;
