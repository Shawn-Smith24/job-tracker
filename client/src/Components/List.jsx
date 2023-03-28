import jobs from "../DummyData/jobs.json";
import companies from "../DummyData/companies.json";
import ListItem from "./ListItem";
export default function List() {
	return (
		<ul className="divide-y divide-secondary">
			{jobs.map((job, id) => (
				<ListItem key={id} company={companies[id]} job={job} />
			))}
		</ul>
	);
}
