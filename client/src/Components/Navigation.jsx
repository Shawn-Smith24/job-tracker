import React from "react";
import { RiLogoutBoxRFill as Logout } from "react-icons/ri";
import { BsSearch as Search } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navigation = () => {
	function search() {
		// search logic goes here
		console.log("searching...");
	}
	return (
		<div className="relative h-16 flex flex-row justify-center shadow-lg items-center">
			<input
				type="text"
				className="w-[300px] h-4/5 rounded-3xl bg-info text-primary px-4"
			/>
			<Search
				color="#F0F0F0"
				size="1.5em"
				className="ml-4 cursor-pointer"
				onClick={search}
			/>
			<div className="cursor-pointer absolute right-0 w-fit pr-6 text-info top-1/2 -translate-y-1/2">
				<Link to="/signin">
					<Logout color="#F0F0F0" size="2em" />
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
