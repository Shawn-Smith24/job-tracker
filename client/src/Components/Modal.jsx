import React, { useState, useContext } from "react";
import ModalContext from "./ModalContext";
import { motion } from "framer-motion";

const Modal = () => {
	const { setShowModal } = useContext(ModalContext);
	const [formData, setFormData] = useState({
		input1: "",
		input2: "",
		input3: "",
		input4: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Process form data
		console.log(formData);
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	return (
		<div className="absolute w-full h-full bg-[#000000D9] z-50 ">
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
							{/* TODO: enter company name */}
							<input
								className="placeholder-secondary my-2 w-full p-2 border border-secondary rounded"
								type="text"
								name="input2"
								value={formData.input2}
								onChange={handleChange}
								placeholder="Enter Name of Company"
							/>
							{/* TODO: choose role */}
							<select
								className="w-full p-2 border border-secondary rounded"
								name="input1"
								value={formData.input1}
								onChange={handleChange}>
								<option value="" disabled selected>
									Choose a role
								</option>
								<option value="Frontend">Frontend</option>
								<option value="Backend">Backend</option>
								<option value="FullStack">FullStack</option>
								<option value="UX/UI">UX/UI</option>
								<option value="Dev-Ops">Dev-Ops</option>
							</select>

							{/* TODO: enter salary */}
							<input
								className="placeholder-secondary my-2 w-full p-2 border border-secondary rounded"
								type="text"
								name="input2"
								value={formData.input2}
								onChange={handleChange}
								placeholder="Enter Salary for this role"
							/>
							{/* TODO: enter Location */}
							<input
								className="placeholder-secondary mb-2 w-full p-2 border border-secondary rounded"
								type="text"
								name="input2"
								value={formData.input2}
								onChange={handleChange}
								placeholder="Enter the location for this role"
							/>
							{/* TODO: Enter Experience Level */}
							<select
								className="placeholder-secondary mb-2 w-full p-2 border border-secondary rounded"
								name="input3"
								value={formData.input1}
								onChange={handleChange}>
								<option value="" disabled selected>
									Enter Experience Level required for this role
								</option>
								<option value="Junior">Junior</option>
								<option value="Mid-Level">Mid-Level</option>
								<option value="Senior">Senior</option>
							</select>
							{/* TODO: Is it remote? */}
							<select
								className="placeholder-secondary mb-2 w-full p-2 border border-secondary rounded"
								name="input1"
								value={formData.input1}
								onChange={handleChange}>
								<option value="" disabled selected>
									Is this a remote position?
								</option>
								<option value="Yes">Yes</option>
								<option value="No">No</option>
							</select>
							{/* TODO: Application Status */}
							<select
								className="w-full p-2 border border-secondary rounded"
								name="input1"
								value={formData.input1}
								onChange={handleChange}>
								<option value="" disabled selected>
									Application Status
								</option>
								<option value="Apllied">Applied</option>
								<option value="Interview 1">Interview 1</option>
								<option value="Interview 2">Interview 2</option>
								<option value="Offer Received">Offer Recieved</option>
								<option value="Application Rejected">
									Application Rejected
								</option>
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
