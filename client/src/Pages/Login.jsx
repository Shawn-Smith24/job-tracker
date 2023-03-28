import React from "react";

const Login = () => {
	return (
		<>
			<div className="bg-gray-300 w-full h-full p-8 relative border border-red-500">
				<div className="items-center justify-center flex flex-col h-[500px] p-12 bg-orange-300 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
					<h1 className="w-full text-4xl text-center pb-12">Login</h1>
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
					<button className="w-full border border-black rounded-lg p-4 my-2">
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
