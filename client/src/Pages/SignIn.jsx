import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setUserId }) => {
	const navigate = useNavigate();
	const [signinFormData, setSigninFormData] = useState({
		email: "",
		password: "",
	});

	function toggleSignIn() {
		navigate("/signup", { replace: true });
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSigninFormData({ ...signinFormData, [name]: value });
	};

	const handleSignin = (e) => {
		e.preventDefault();
		console.log("form data", signinFormData);
		const data = {
			email: signinFormData.email,
			password: signinFormData.password,
		};

		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					navigate("/dashboard", { replace: true });
					return response.json();
				} else {
					console.log("Error, something went wrong :(((");
					// [ ] make some sort of flag here
				}
			})
			.then((user) => {
				setUserId(user.id);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<div className="w-full drop-shadow-sm h-full p-8 relative text-info">
				<form
					onSubmit={handleSignin}
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
						value={signinFormData.email}
						onChange={handleChange}
						required
					/>
					<input
						name="password"
						className="w-full p-2 rounded-md my-2 text-primary"
						type="password"
						placeholder="Enter password"
						value={signinFormData.password}
						onChange={handleChange}
						required
					/>
					<input
						className="cursor-pointer text-center w-full border border-info rounded-lg p-4 my-2 bg-primary transition-colors hover:bg-accent hover:border-accent hover:text-primary"
						type="submit"
						value="Sign In"
					/>

					<p className="w-full my-2 text-center">
						Don't have an account yet? Sign Up{" "}
						<strong className="cursor-pointer underline" onClick={toggleSignIn}>
							here
						</strong>
					</p>
				</form>
			</div>
		</>
	);
};
export default SignIn;
