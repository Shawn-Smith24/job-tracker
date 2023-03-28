import React from "react";
import List from "../Components/List";

const Dashboard = () => {
	return (
		<div className=" w-full h-full flex flex-row">
			<div className="bg-pink-300 w-96 h-full">
				<List />
			</div>
		</div>
	);
};

export default Dashboard;
