import "./App.css";
import SignIn from "./Pages/SignIn";
import Landing from "./Pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="h-screen w-full fixed bg-primary">
			<Router>
				<Routes>
					<Route path="/landing" element={<Landing />}></Route>
					<Route path="/signin" element={<SignIn />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
