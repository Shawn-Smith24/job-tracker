import React from "react";

const JobDetailSection = () => {
	return (
		<div className="relative border w-full text-info p-4">
			{applicationCard()}
		</div>
	);

	function applicationCard() {
		return (
			<div className="absolute w-4/5 full h-4/5 bg-accent p-8">
				<h2 className="font-display text-6xl w-full text-center">role</h2>
				<ul className="border">
					<li>company_name</li>
					<li>location</li>
					<li>salary</li>
					<li>experience_level</li>
				</ul>
			</div>
		);
	}
};

export default JobDetailSection;
