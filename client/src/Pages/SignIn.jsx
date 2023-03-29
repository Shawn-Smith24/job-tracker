import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	function toggleSignIn() {
		setIsSignIn(!isSignIn);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
	};

	console.log(process.env.REACT_APP_MOCK_API_URL);
	return (
		<>
			<div className="w-full h-full p-8 relative text-info">
				{isSignIn ? (
					<form
						onSubmit={handleSubmit}
						className="items-center justify-center flex flex-col w-[500px] h-[550px] p-12 shadow-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
						<h1 className="font-display w-full text-6xl text-center pb-12 text-accent">
							Sign In
						</h1>
						<p className="w-full text-center mb-4">
							Enter the fields below to sign in
						</p>
						<input
							name="email"
							type="email"
							className="w-full rounded-md p-2 my-2 text-primary"
							placeholder="Enter email"
							value={formData.email}
							onChange={handleChange}
						/>
						<input
							name="password"
							className="w-full p-2 rounded-md my-2 text-primary"
							type="password"
							placeholder="Enter password"
							value={formData.password}
							onChange={handleChange}
						/>
						<Link
							to="/dashboard"
							// type="submit"
							className="cursor-pointer text-center w-full border border-info rounded-lg p-4 my-2 bg-primary transition-colors hover:bg-accent hover:border-accent hover:text-primary">
							Sign In
						</Link>
						<p className="w-full my-2 text-center">
							Don't have an account yet? Sign Up{" "}
							<strong
								className="cursor-pointer underline"
								onClick={toggleSignIn}>
								here
							</strong>
						</p>
					</form>
				) : (
					<form
						onSubmit={handleSubmit}
						className="items-center justify-center flex flex-col w-[500px] h-[550px] p-12 shadow-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
						<h1 className="font-display w-full text-6xl text-center pb-12 text-accent">
							Sign Up
						</h1>
						<p className="w-full text-center mb-4">
							Enter the fields below to sign up for an Account
						</p>
						<input
							name="name"
							className="text-primary w-full p-2 rounded-md my-2"
							type="text"
							placeholder="Enter Your Name"
							value={formData.name}
							onChange={handleChange}
						/>
						<input
							name="email"
							type="email"
							className="text-primary w-full rounded-md p-2 my-2"
							placeholder="Enter email"
							value={formData.email}
							onChange={handleChange}
						/>

						<input
							name="password"
							className="text-primary w-full p-2 rounded-md my-2"
							type="password"
							placeholder="Enter password"
							value={formData.password}
							onChange={handleChange}
						/>
						<input
							name="confirmPassword"
							className="text-primary w-full p-2 rounded-md my-2"
							type="password"
							placeholder="Enter password again ..."
							value={formData.confirmPassword}
							onChange={handleChange}
						/>

						<Link
							to="/dashboard"
							// type="submit"
							className="cursor-pointer text-center w-full border border-info rounded-lg p-4 my-2 bg-primary transition-colors hover:bg-accent hover:border-accent hover:text-primary">
							Sign Up
						</Link>
						<p className="w-full my-2 text-center">
							Already Have An Account? Sign In{" "}
							<strong
								className="cursor-pointer underline"
								onClick={toggleSignIn}>
								here
							</strong>
						</p>
					</form>
				)}
			</div>
		</>
	);
};
export default SignIn;
