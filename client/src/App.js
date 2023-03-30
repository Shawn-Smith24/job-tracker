import "./App.css";
import SignIn from "./Pages/SignIn";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./Components/ContextProviders/ModalContext";
import { ApplicationsProvider } from "./Components/ContextProviders/ApplicationsContext"; // Import ApplicationsProvider
import { CompaniesProvider } from "./Components/ContextProviders/CompaniesContext";
import { JobsProvider } from "./Components/ContextProviders/JobsContext";
import { useState } from "react";
function App() {
	// TODO: This will change when we add user authentication
	const [userId, setUserId] = useState(1);
	return (
		<div className="h-screen w-full fixed bg-primary">
			<ModalProvider>
				<Router>
					<Routes>
						<Route path="/landing" element={<Landing />} />
						<Route path="/" element={<SignIn />} />
						<Route
							path="/dashboard"
							element={
								<ApplicationsProvider>
									<JobsProvider>
										<CompaniesProvider>
											<Dashboard userId={userId} />
										</CompaniesProvider>
									</JobsProvider>
								</ApplicationsProvider>
							}
						/>
					</Routes>
				</Router>
			</ModalProvider>
		</div>
	);
}

export default App;
