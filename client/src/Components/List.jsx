import jobs from "../DummyData/jobs.json";

export default function Example() {
	function showJobDetails(e) {
		// show job details logic goes here
		console.log(`showing Job Details for ${e.target}`);
	}
	return (
		<ul className="divide-y divide-gray-200">
			{jobs.map((job) => (
				<li key={job.role} className="flex py-4">
					<div
						className="ml-3 cursor-pointer"
						onClick={(e) => showJobDetails(e)}>
						<p className="text-sm font-medium text-gray-900">company_name</p>
						<p className="text-sm text-gray-500">{job.role}</p>
					</div>
				</li>
			))}
		</ul>
	);
}
