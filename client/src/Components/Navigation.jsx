import React from "react";
import { RiLogoutBoxRFill as Logout } from "react-icons/ri";
import { BsSearch as Search } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navigation = () => {
	function search() {
		// [ ] implement search logic here
		console.log("searching...");
	}
	return (
		<div className="relative h-16 flex flex-row justify-center items-center border-b border-b-secondary">
			<input
				type="text"
				className="w-[300px] h-3/5 rounded-3xl bg-info text-primary px-4"
			/>
			<Search
				color="#F0F0F0"
				size="1.5em"
				className="ml-4 cursor-pointer text-inf transition-colors"
				onClick={search}
			/>
			<div className="cursor-pointer absolute right-0 w-fit pr-6 text-info top-1/2 -translate-y-1/2 ">
				{/* [ ] implement a session logout here */}
				<Link to="/signin">
					<Logout
						size="2em"
						className="text-info hover:text-accent transition-colors"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
