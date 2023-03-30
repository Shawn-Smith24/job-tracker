import "./App.css";
import SignIn from "./Pages/SignIn";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./Components/ModalContext";

const url = "https://f2850a41-ed1f-4937-86a3-ef16c1791c8c.mock.pstmn.io/";
function App() {
	return (
		<div className="h-screen w-full fixed bg-primary">
			<ModalProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</Router>
			</ModalProvider>
		</div>
	);
}

export default App;
