import ListItem from "./ListItem";

export default function List({ applications, setDisplayedApp }) {
	console.log(applications[0]);
	return (
		<ul className="">
			{applications.map((application, id) => (
				<ListItem
					setDisplayedApp={setDisplayedApp}
					application={application}
					key={id}
				/>
			))}
		</ul>
	);
}
