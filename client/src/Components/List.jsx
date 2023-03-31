import ListItem from "./ListItem";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle as Add } from "react-icons/ai";
export default function List({
	applications,
	setDisplayedContent,
	displayedContent,
	setExperienceCount,
	setApplications,
	userId,
}) {
	const [formData, setFormData] = useState({
		company_name: "",
		job_name: "",
		salary: "",
		location: "",
		experience_level: "",
		status: "",
	});
	const [showModal, setShowModal] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleDelete = (applicationId) => {
		fetch(`/applications/${applicationId}`, {
			method: "DELETE",
		})
			.then((response) => {
				const updatedApplications = applications.filter(
					(app) => app.id !== applicationId
				);
				setApplications(updatedApplications);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const statusOptions = [
			"Applied",
			"Interviewing",
			"Offer Received",
			"Application Rejected",
		];
		const status_input = statusOptions.indexOf(formData.status);
		fetch("/companies")
			.then((response) => response.json())
			.then((companies) => {
				console.log(companies);
				const matchingCompany = companies.find(
					(company) => company.company_name === formData.company_name
				);
				if (matchingCompany) {
					console.log(matchingCompany.id);
					return matchingCompany.id;
				} else {
					throw new Error("company not found");
				}
			})
			.then((companyId) => {
				console.log("Company ID: ", companyId);
				fetch("/jobs", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						company_id: companyId,
						job_name: formData.job_name,
						salary: formData.salary,
						location: formData.location,
						experience_level: formData.experience_level,
					}),
				})
					.then((res) => res.json())
					.then((newJob) => {
						console.log("status input for this application is", status_input);
						fetch("/applications", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								status: status_input,
								job_id: newJob.id,
								user_id: userId,
							}),
						});
					});
			})
			.catch((error) => console.log(error));
	};

	function toggleModal() {
		setShowModal(!showModal);
	}
	const updateExperienceCount = (experienceLevel) => {
		if (experienceLevel === "Junior") {
			setExperienceCount((prevCount) => [
				prevCount[0] + 1,
				prevCount[1],
				prevCount[2],
			]);
		} else if (experienceLevel === "Mid-Level") {
			setExperienceCount((prevCount) => [
				prevCount[0],
				prevCount[1] + 1,
				prevCount[2],
			]);
		} else if (experienceLevel === "Senior") {
			setExperienceCount((prevCount) => [
				prevCount[0],
				prevCount[1],
				prevCount[2] + 1,
			]);
		}
	};

	return (
		<>
			<div className="relative">
				<span
					className="
				cursor-pointer absolute -right-6 z-50 -mr-1 my-1 text-secondary transition
				hover:text-info
				">
					<Add onClick={toggleModal} size="1.5em" />
				</span>
				<ul>
					{applications.map((application, id) => (
						<ListItem
							setDisplayedContent={setDisplayedContent}
							displayedContent={displayedContent}
							application={application}
							key={id}
							updateExperienceCount={updateExperienceCount}
							handleDelete={() => handleDelete(application.id)}
						/>
					))}
				</ul>
			</div>
			{showModal && (
				<div className="absolute w-full h-full bg-modal z-50 top-0">
					<div className="">
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
									{/* TODO: companies */}
									<input
										className="placeholder-secondary my-2 w-full p-2 border border-secondary rounded"
										type="text"
										name="company_name"
										value={formData.company_name}
										onChange={handleChange}
										placeholder="Enter Name of Company"
									/>
									{/* TODO: jobs */}
									<select
										className="w-full p-2 border border-secondary rounded"
										name="job_name"
										value={formData.job_name}
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
									<input
										className="placeholder-secondary my-2 w-full p-2 border border-secondary rounded"
										type="text"
										name="salary"
										value={formData.salary}
										onChange={handleChange}
										placeholder="Enter Salary for this role"
									/>
									<input
										className="placeholder-secondary mb-2 w-full p-2 border border-secondary rounded"
										type="text"
										name="location"
										value={formData.location}
										onChange={handleChange}
										placeholder="Enter the location for this role"
									/>
									<select
										className="placeholder-secondary mb-2 w-full p-2 border border-secondary rounded"
										name="experience_level"
										value={formData.experience_level}
										onChange={handleChange}>
										<option value="" disabled selected>
											Enter Experience Level required for this role
										</option>
										<option value="Junior">Junior</option>
										<option value="Mid-Level">Mid-Level</option>
										<option value="Senior">Senior</option>
									</select>
									{/* TODO: applications */}
									<select
										className="w-full p-2 border border-secondary rounded"
										name="status"
										value={formData.status}
										onChange={handleChange}>
										<option value="" disabled selected>
											Application Status
										</option>
										<option value="Applied">Applied</option>
										<option value="Interviewing">Interviewing</option>
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
										onClick={toggleModal}>
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
			)}
		</>
	);
}
