import jobs from "../DummyData/jobs.json";
import companies from "../DummyData/companies.json";
export default function List({ offer }) {
	// each list item needs to have it's own list id
	function showJobDetails(e) {
		console.log(`showing Job Details for ${e.target}`);
	}
	return (
		<ul className="divide-y divide-secondary">
			{jobs.map((job, id) => (
				<li key={id} className="flex py-4">
					<div
						className="ml-3 cursor-pointer"
						onClick={(e) => showJobDetails(e)}>
						<p className="font-medium text-info text-lg font-display">
							{companies[id].companyName}
						</p>
						<p className="text-sm text-gray-500">{job.role}</p>
					</div>
				</li>
			))}
		</ul>
	);
}
