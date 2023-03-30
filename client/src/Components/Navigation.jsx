import React from "react";
import { RiLogoutBoxRFill as Logout } from "react-icons/ri";
import { BsSearch as Search } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
	const navigate = useNavigate();
	function search() {
		console.log("searching...");
	}
	function logout() {
		fetch("/logout", {
			method: "DELETE",
			credentials: "include",
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Logout failed.");
				}
				navigate("/", { replace: true });
			})
			.catch((error) => {
				console.error(error);
			});
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
				<span>
					<Logout
						onClick={logout}
						size="2em"
						className="text-info hover:text-accent transition-colors"
					/>
				</span>
			</div>
		</div>
	);
};

export default Navigation;
