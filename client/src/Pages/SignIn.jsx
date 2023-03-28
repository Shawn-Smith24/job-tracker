import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	function toggleSignIn() {
		setIsSignIn(!isSignIn);
	}
	return (
		<>
			<div className=" w-full h-full p-8 relative  text-info">
				{isSignIn ? (
					<div className="items-center justify-center flex flex-col w-[500px] h-[500px] p-12 shadow-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
						<h1 className="font-display w-full text-6xl text-center pb-12 text-accent">
							Sign In
						</h1>
						<p className="w-full text-center">login_description</p>
						<input
							type="text"
							className="w-full rounded-md p-2 my-2"
							placeholder="Enter email"
						/>
						<input
							className="w-full p-2 rounded-md my-2"
							type="text"
							placeholder="Enter password"
						/>
						<Link
							to="/dashboard"
							className="
                        	cursor-pointer text-center w-full border border-info rounded-lg p-4 my-2 bg-primary transition-colors
                        	hover:bg-accent hover:border-accent hover:text-primary">
							Sign In
						</Link>
						<p className="w-full my-2 text-center">
							Don't have an account yet? Sign Up{" "}
							<strong className="cursor-pointer" onClick={toggleSignIn}>
								here
							</strong>
						</p>
					</div>
				) : (
					<div className="items-center justify-center flex flex-col w-[500px]  h-[500px] p-12 shadow-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
						<h1 className="font-display w-full text-6xl text-center pb-12 text-accent">
							Sign Up
						</h1>
						<p className="w-full text-center">login_description</p>
						<input
							className="text-primary w-full p-2 rounded-md my-2"
							type="text"
							placeholder="Enter Your Name"
						/>
						<input
							type="text"
							className="text-primary w-full rounded-md p-2 my-2"
							placeholder="Enter email"
						/>

						<input
							className="text-primary w-full p-2 rounded-md my-2"
							type="text"
							placeholder="Enter password"
						/>
						<input
							className="text-primary w-full p-2 rounded-md my-2"
							type="text"
							placeholder="Enter password again ..."
						/>

						<button
							className="
                        w-full border border-info rounded-lg p-4 my-2 bg-primary transition-colors
                        hover:bg-accent hover:border-accent hover:text-primary">
							Sign Up
						</button>
						<p className="w-full my-2 text-center">
							Already Have An Account? Sign In{" "}
							<strong className="cursor-pointer" onClick={toggleSignIn}>
								here
							</strong>
						</p>
					</div>
				)}
			</div>
		</>
	);
};

export default SignIn;
