const jobs = [
	{
		companyName: "Apple",
		role: "Frontend Engineer",
	},
	{
		companyName: "Google",
		role: "Backend Engineer",
	},
	{
		companyName: "Netflix",
		role: "Full-Stack Engineer",
	},
];

export default function Example() {
	return (
		<ul className="divide-y divide-gray-200">
			{jobs.map((job) => (
				<li key={job.role} className="flex py-4">
					<div className="ml-3">
						<p className="text-sm font-medium text-gray-900">
							{job.companyName}
						</p>
						<p className="text-sm text-gray-500">{job.role}</p>
					</div>
				</li>
			))}
		</ul>
	);
}
