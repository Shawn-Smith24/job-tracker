import "./App.css";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="h-screen w-full fixed">
			<Router>
				<Routes>
					<Route path="/landing" element={<Landing />}></Route>
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
