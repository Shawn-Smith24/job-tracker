import React from "react";
import Timeline from "./Timeline";
import { FiEdit as Edit } from "react-icons/fi";
import { useContext } from "react";
import ModalContext from "./ModalContext";
const JobDetailSection = ({ companies, jobs, displayedApp }) => {
	const { setShowModal } = useContext(ModalContext);

	function editJobDetail() {
		// [ ] implement job detail editing
		console.log("Edit Job Detail");
		setShowModal(true);
	}
	return (
		<div className="relative w-full text-info py-4 px-12 bg-primary flex flex-row justify-center items-center">
			{applicationCard()}
			{dataVisualization()}
		</div>
	);
	function dataVisualization() {
		return <div className="border w-full h-[600px] ml-6">asdf</div>;
	}

	function applicationCard() {
		const experience = ["Apprentice", "Jr", "Mid-Level", "Sr"];
		const job = jobs.find((job) => job.job_id === displayedApp.job_id);
		const company = companies[1];
		return (
			<div
				className="
				max-w-[650px] w-full h-[600px] p-8 bg-primary rounded-xl border border-secondary shadow-lg
				">
				<div className="relative">
					<Edit
						className="absolute right-0 top-0 text-secondary cursor-pointer"
						size="1.25em"
						onClick={editJobDetail}
					/>
					<h2 className="font-display text-6xl w-full text-center pt-10 text-accent">
						{job.role}
					</h2>
					<ul className="text-center mt-12">
						<li>
							<strong className="text-accent">Company</strong>:{" "}
							{company.company_name}
						</li>
						<li>
							<strong className="text-accent">Location</strong>: {job.location}
						</li>
						<li>
							<strong className="text-accent">Salary</strong>: ${job.salary}
						</li>
						<li>
							<strong className="text-accent">Experience Level</strong>:{" "}
							{experience[job.experience_level]}
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
			</div>
		);
	}
};

export default JobDetailSection;
