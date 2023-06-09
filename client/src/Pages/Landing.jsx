import React from "react";
import { useEffect } from "react";
const Landing = () => {
	useEffect(() => {
		fetch("/users")
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Boost your productivity.
					<br />
					Start using our app today.
				</h2>
				<div className="mt-10 flex items-center gap-x-6">
					<a
						href="https://google.com"
						className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Get started
					</a>
					<a
						href="https://google.com"
						className="text-sm font-semibold leading-6 text-gray-900">
						Learn more <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Landing;
