import "./App.css";
import SignIn from "./Pages/SignIn";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="h-screen w-full fixed bg-primary">
			<Router>
				<Routes>
					<Route path="/landing" element={<Landing />}></Route>
					<Route path="/signin" element={<SignIn />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
