import "./App.css";
import SignIn from "./Pages/SignIn";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./Components/ModalContext";

function App() {
	return (
		<div className="h-screen w-full fixed bg-primary">
			<ModalProvider>
				<Router>
					<Routes>
						<Route path="/landing" element={<Landing />} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</Router>
			</ModalProvider>
		</div>
	);
}

export default App;
