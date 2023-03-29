import jobs from "../DummyData/jobs.json";
import company from "../DummyData/companies.json";
import ListItem from "./ListItem";
export default function List({ companies, jo }) {
	console.log("list component", companies);
	return (
		<ul className="">
			{jobs.map((job, id) => (
				<ListItem key={id} company={companies[0]} job={job} />
			))}
		</ul>
	);
}
