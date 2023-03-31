import React, { createContext, useContext, useState } from "react";

export const JobsContext = createContext();

export const useJobs = () => {
	const context = useContext(JobsContext);
	if (!context) {
		throw new Error("useJobs must be used within a JobsProvider");
	}
	return context;
};

export const JobsProvider = ({ children }) => {
	const [jobs, setJobs] = useState([]);

	return (
		<JobsContext.Provider value={{ jobs, setJobs }}>
			{children}
		</JobsContext.Provider>
	);
};
