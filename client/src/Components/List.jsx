import jobs from "../DummyData/jobs.json";
import companies from "../DummyData/companies.json";
import ListItem from "./ListItem";
export default function List() {
	console.log("list component", companies);
	return (
		<ul className="">
			{jobs.map((job, id) => (
				<ListItem key={id} company={companies[0]} job={job} />
			))}
		</ul>
	);
}
