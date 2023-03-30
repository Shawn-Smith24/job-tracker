import ListItem from "./ListItem";

export default function List({
	applications,
	setDisplayedContent,
	displayedContent,
}) {
	console.log(applications[0]);
	return (
		<ul className="">
			{applications.map((application, id) => (
				<ListItem
					setDisplayedContent={setDisplayedContent}
					displayedContent={displayedContent}
					application={application}
					key={id}
				/>
			))}
		</ul>
	);
}
