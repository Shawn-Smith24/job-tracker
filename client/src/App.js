import "./App.css";
import SignIn from "./Pages/SignIn";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./Components/ContextProviders/ModalContext";
import { ApplicationsProvider } from "./Components/ContextProviders/ApplicationsContext"; // Import ApplicationsProvider
import { JobsProvider } from "./Components/ContextProviders/JobsContext";
function App() {
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
										{" "}
										{/* Wrap Dashboard with ApplicationsProvider */}
										<Dashboard />
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
