import React from "react";
import List from "../Components/List";
import { useState } from "react";
import JobDetailSection from "../Components/JobDetailSection";
import Navigation from "../Components/Navigation";
import Modal from "../Components/Modal";
import ModalContext from "../Components/ModalContext";
import { useContext, useEffect } from "react";
const BASE_URL = process.env.REACT_APP_MOCK_API_URL;
const Dashboard = () => {
	const { showModal } = useContext(ModalContext); // Access showModal from the context
	const [companies, setCompanies] = useState(null);

	const [offer, setOffer] = useState({
		role: "Frontend Engineer",
		company: "Apple",
		location: "Atlanta, GA",
		salary: 80000,
		expLevel: 1,
		isRemote: "No",
	});

	useEffect(() => {
		console.log("dashboard loading...");
		fetch(`${BASE_URL}/companies`)
			.then((response) => response.json())
			.then((companiesList) => {
				console.log(companiesList);
				setCompanies(companiesList);
			});
	}, []);
	console.log("companies List: ", companies);
	return (
		<>
			<div className="w-full h-full flex flex-col">
				<Navigation />
				{showModal && (
					<Modal className="absolute" style={{ display: "block" }} />
				)}
				<div className="w-full h-full flex flex-row">
					<div className="w-96 h-full shadow-lg border-r border-r-secondary">
						<List offer={offer} setOffer={setOffer} />{" "}
					</div>
					<JobDetailSection />
				</div>
			</div>
		</>
	);
};
export default Dashboard;
