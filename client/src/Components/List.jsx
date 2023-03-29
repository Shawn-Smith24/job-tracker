import ListItem from "./ListItem";

export default function List({ companies, jobs, applications }) {
	console.log("list component", companies);
	return (
		<ul className="">
			{applications.map((application, id) => (
				<ListItem
					key={id}
					// TODO: this needs to be replaced once we have capabilities for backref
					company={companies[0]}
					job={jobs.find((job) => job.job_id === application.job_id)}
				/>
			))}
		</ul>
	);
}
