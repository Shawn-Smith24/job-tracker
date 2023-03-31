import React from "react";
import { FiEdit as Edit } from "react-icons/fi";
import { useContext } from "react";
import ModalContext from "./ContextProviders/ModalContext";
import DataVisualization from "./DataVisualization";
const JobDetailSection = ({ displayedContent, experienceCount }) => {
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
			<div
				className="
				border w-[400px] h-fit rounded-xl border-secondary shadow-lg my-4
				lg:ml-6 ">
				<DataVisualization experienceCount={experienceCount} />
			</div>
		</div>
	);

	function applicationCard() {
		return (
			<div
				className="h-fit w-[400px]
				lg:h-[600px] p-8 bg-primary rounded-xl border border-secondary shadow-lg
				">
				<div
					className="
					relative my-4
					lg:my-0">
					<Edit
						className="
						transition absolute right-0 top-0 text-secondary cursor-pointer
						hover:text-info"
						size="1.25em"
						onClick={editJobDetail}
					/>
					<h2
						className="font-display text-2xl w-full text-center text-accent
						lg:text-6xl lg:pt-10">
						{displayedContent.companyName}
					</h2>
					<ul
						className="
						text-center lg:mt-12">
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
						<p className="w-full text-center text-info ">
							{displayedContent.applicationStatus}
						</p>
					</div>
					{/* <Timeline /> */}
				</div>
			</div>
		);
	}
};

export default JobDetailSection;
