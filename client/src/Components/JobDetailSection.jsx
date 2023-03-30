import React from "react";
import Timeline from "./Timeline";
import { FiEdit as Edit } from "react-icons/fi";
import { useContext } from "react";
import ModalContext from "./ModalContext";
import DataVisualization from "./DataVisualization";
const JobDetailSection = ({ displayedContent }) => {
	const { setShowModal } = useContext(ModalContext);

	function editJobDetail() {
		// [ ] implement job detail editing
		console.log("Edit Job Detail");
		setShowModal(true);
	}
	return (
		<div className="relative w-full text-info py-4 px-12 bg-primary flex flex-row justify-center items-center">
			{applicationCard()}
			<div className="border w-full h-[700px] ml-6 rounded-xl border-secondary">
				<DataVisualization />
			</div>
		</div>
	);

	function applicationCard() {
		return (
			<div
				className="
				max-w-[650px] w-full h-[700px] p-8 bg-primary rounded-xl border border-secondary shadow-lg
				">
				<div className="relative">
					<Edit
						className="absolute right-0 top-0 text-secondary cursor-pointer"
						size="1.25em"
						onClick={editJobDetail}
					/>
					<h2 className="font-display text-6xl w-full text-center pt-10 text-accent">
						{displayedContent.jobName}
					</h2>
					<ul className="text-center mt-12">
						<li>
							<strong className="text-accent">Company</strong>:{" "}
							{displayedContent.companyName}
						</li>
						<li>
							<strong className="text-accent">Location</strong>:
							displayedContent.location
						</li>
						<li>
							<strong className="text-accent">Salary</strong>:{" "}
							{displayedContent.salary}
						</li>
						<li>
							<strong className="text-accent">Experience Level</strong>:{" "}
							{displayedContent.expLevel}
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
