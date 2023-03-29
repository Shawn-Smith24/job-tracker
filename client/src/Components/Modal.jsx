import React, { useState, useContext } from "react";
import ModalContext from "./ModalContext";

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
		<div className="absolute w-full h-full bg-[#000000D9] z-50">
			<div className="w-full h-full relative">
				<div className="text-info p-4 absolute rounded-xl bg-primary w-3/4 h-5/6 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
					<form onSubmit={handleSubmit}>
						<div className="space-y 4">
							<select
								className="w-full p-2 border border-gray-300 rounded"
								name="input1"
								value={formData.input1}
								onChange={handleChange}>
								<option value="" disabled selected>
									Choose a role
								</option>
								<option value="Frontend">Frontend</option>
								<option value="Backend">Backend</option>
								<option value="FullStack">FullStack</option>
							</select>
							<input
								className="w-full p-2 border border-gray-300 rounded"
								type="text"
								name="input2"
								value={formData.input2}
								onChange={handleChange}
								placeholder="Input 2"
							/>
							<input
								className="w-full p-2 border border-gray-300 rounded"
								type="text"
								name="input3"
								value={formData.input3}
								onChange={handleChange}
								placeholder="Input 3"
							/>
							<input
								className="w-full p-2 border border-gray-300 rounded"
								type="text"
								name="input4"
								value={formData.input4}
								onChange={handleChange}
								placeholder="Input 4"
							/>
						</div>
						<div className="flex justify-end mt-4 space-x-4">
							<button
								className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
								type="button"
								onClick={handleCancel}>
								Cancel
							</button>
							<button
								className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
								type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Modal;
