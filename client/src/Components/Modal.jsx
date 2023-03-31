import React, { useState, useContext } from "react";
import ModalContext from "./ContextProviders/ModalContext";
import { motion } from "framer-motion";

const Modal = ({ displayedContent }) => {
	const { setShowModal, setDisplayedContent } = useContext(ModalContext);
	const [formData, setFormData] = useState({
		job_name: "",
		location: "",
		salary: "",
		experience_level: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const requestOptions = {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		};
		fetch(`/jobs/${displayedContent.job_id}`, requestOptions)
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	return (
		<div className="absolute w-full h-full bg-modal z-50 ">
			<div className="w-full h-full relative">
				<motion.div
					initial={{
						opacity: 0,
						y: 200,
						translateX: "-50%",
						translateY: "-50%",
					}}
					animate={{
						opacity: 1,
						y: 0,
						transition: { type: "spring", duration: 1 },
					}}
					className="
					text-secondary h-fit flex flex-col items-center justify-center px-4 py-10 absolute rounded-xl border w-3/4 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
					lg:px-12">
					<form onSubmit={handleSubmit}>
						<div className="space-y 4">
							{/* TODO: job_name */}
							<select
								className="w-full p-2 border border-secondary rounded"
								name="job_name"
								value={formData.job_name}
								onChange={handleChange}>
								<option value="" disabled selected>
									Edit Role
								</option>
								<option value="Frontend">Frontend</option>
								<option value="Backend">Backend</option>
								<option value="FullStack">FullStack</option>
								<option value="UX/UI">UX/UI</option>
								<option value="Dev-Ops">Dev-Ops</option>
							</select>

							{/* TODO: salary */}
							<input
								className="placeholder-secondary my-2 w-full p-2 border border-secondary rounded"
								type="text"
								name="salary"
								value={formData.salary}
								onChange={handleChange}
								placeholder="Edit salary for this role"
							/>
							{/* TODO: location */}
							<input
								className="placeholder-secondary mb-2 w-full p-2 border border-secondary rounded"
								type="text"
								name="location"
								value={formData.location}
								onChange={handleChange}
								placeholder="Enter the location for this role"
							/>
							{/* TODO: experience_level */}
							<select
								className="placeholder-secondary mb-2 w-full p-2 border border-secondary rounded"
								name="experience_level"
								value={formData.input1}
								onChange={handleChange}>
								<option value="" disabled selected>
									Enter Experience Level required for this role
								</option>
								<option value="Junior">Junior</option>
								<option value="Mid-Level">Mid-Level</option>
								<option value="Senior">Senior</option>
							</select>
						</div>
						<div className="flex justify-center mt-4 space-x-4 w-full">
							<button
								className="px-4 py-2 text-info rounded border border-info"
								type="button"
								onClick={handleCancel}>
								Cancel
							</button>
							<button
								className="
								px-4 py-2 bg-info text-primary rounded transition
								hover:bg-accent hover:text-info"
								type="submit">
								Submit
							</button>
						</div>
					</form>
				</motion.div>
			</div>
		</div>
	);
};
export default Modal;
