import React from "react";
import { RiLogoutBoxRFill as Logout } from "react-icons/ri";
import { Link } from "react-router-dom";
const Navigation = () => {
	return (
		<div className="relative h-16 flex flex-row justify-center shadow-lg">
			<input
				type="text"
				className="w-[300px] my-3 rounded-sm bg-info text-primary px-4"
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
