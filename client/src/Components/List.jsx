import ListItem from "./ListItem";

export default function List({
	applications,
	setDisplayedContent,
	displayedContent,
	setExperienceCount,
}) {
	const updateExperienceCount = (experienceLevel) => {
		if (experienceLevel === "Junior") {
			setExperienceCount((prevCount) => [
				prevCount[0] + 1,
				prevCount[1],
				prevCount[2],
			]);
		} else if (experienceLevel === "Mid-Level") {
			setExperienceCount((prevCount) => [
				prevCount[0],
				prevCount[1] + 1,
				prevCount[2],
			]);
		} else if (experienceLevel === "Senior") {
			setExperienceCount((prevCount) => [
				prevCount[0],
				prevCount[1],
				prevCount[2] + 1,
			]);
		}
	};

	return (
		<ul className="">
			{applications.map((application, id) => (
				<ListItem
					setDisplayedContent={setDisplayedContent}
					displayedContent={displayedContent}
					application={application}
					key={id}
					updateExperienceCount={updateExperienceCount}
				/>
			))}
		</ul>
	);
}
