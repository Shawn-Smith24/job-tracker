import { createContext, useState, useContext } from "react";

const ApplicationsContext = createContext();

export const useApplications = () => {
	const context = useContext(ApplicationsContext);
	if (!context) {
		throw new Error(
			"useApplications must be used within an ApplicationsProvider"
		);
	}
	return context;
};

export const ApplicationsProvider = ({ children }) => {
	const [applications, setApplications] = useState(null);

	return (
		<ApplicationsContext.Provider value={{ applications, setApplications }}>
			{children}
		</ApplicationsContext.Provider>
	);
};
