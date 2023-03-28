import React from "react";

const Login = () => {
	return (
		<>
			<div className=" w-full h-full p-8 relative border text-info">
				<div className="items-center justify-center flex flex-col h-[500px] p-12 shadow-md absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
					<h1 className="font-display w-full text-6xl text-center pb-12 text-accent">
						Login
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
					<button className="w-full border border-black rounded-lg p-4 my-2 bg-primary">
						Sign In
					</button>
					<p className="w-full my-2">
						Don't have an Account? Sign Up <strong>here</strong>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
