import React from "react";
import Timeline from "./Timeline";
import { FiEdit as Edit } from "react-icons/fi";
import { useContext } from "react";
import ModalContext from "./ModalContext";
import DataVisualization from "./DataVisualization";
const JobDetailSection = ({ displayedContent }) => {
	const { setShowModal } = useContext(ModalContext);

	function editJobDetail() {
		setShowModal(true);
	}
	return (
		<div
			className="
			relative flex flex-col justify-center items-center bg-primary 
			w-3/4 text-info lg:py-4 lg:px-12 lg:flex-row">
			{applicationCard()}
			<div className="border w-full h-[700px] ml-6 rounded-xl border-secondary">
				<DataVisualization />
			</div>
		</div>
	);

	function applicationCard() {
		return (
			<div
				className="h-fit
				max-w-[650px] w-full lg:h-[700px] p-8 bg-primary rounded-xl border border-secondary shadow-lg
				">
				<div className="relative">
					<Edit
						className="absolute right-0 top-0 text-secondary cursor-pointer"
						size="1.25em"
						onClick={editJobDetail}
					/>
					<h2
						className="font-display text-xl w-full text-center pt-10
						lg:text-6xl text-accent">
						{displayedContent.companyName}
					</h2>
					<ul
						className="
						text-center mt-12">
						<li>
							<strong className="text-accent">Role</strong>:{" "}
							{displayedContent.jobName}
						</li>
						<li>
							<strong className="text-accent">Location</strong>:{" "}
							{displayedContent.location}
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
						<h2
							className="font-display text-lg
							lg:text-4xl text-center lg:mt-6 text-accent">
							Application Status
						</h2>
					</div>
					{/* <Timeline /> */}
				</div>
			</div>
		);
	}
};

export default JobDetailSection;
