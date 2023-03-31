import React, { createContext, useState, useContext } from "react";

export const CompaniesContext = createContext();

export const useCompanies = () => {
	const context = useContext(CompaniesContext);
	if (!context) {
		throw new Error("useCompanies must be used within a CompaniesProvider");
	}
	return context;
};

export const CompaniesProvider = ({ children }) => {
	const [companies, setCompanies] = useState(null);

	return (
		<CompaniesContext.Provider value={{ companies, setCompanies }}>
			{children}
		</CompaniesContext.Provider>
	);
};
