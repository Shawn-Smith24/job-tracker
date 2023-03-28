import jobs from "../DummyData/jobs.json";
import companies from "../DummyData/companies.json";
export default function Example() {
	function showJobDetails(e) {
		// show job details logic goes here
		console.log(`showing Job Details for ${e.target}`);
	}
	return (
		<ul className="divide-y divide-gray-200">
			{jobs.map((job, id) => (
				<li key={id} className="flex py-4">
					<div
						className="ml-3 cursor-pointer"
						onClick={(e) => showJobDetails(e)}>
						<p className="text-sm font-medium text-gray-900">
							{companies[id].companyName}
						</p>
						<p className="text-sm text-gray-500">{job.role}</p>
					</div>
				</li>
			))}
		</ul>
	);
}
