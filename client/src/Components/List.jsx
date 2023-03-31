import ListItem from "./ListItem";
import { AiOutlinePlusCircle as Add } from "react-icons/ai";
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
		<div className="relative">
			<span
				className="
				cursor-pointer absolute -right-6 z-50 -mr-1 my-1 text-secondary transition
				hover:text-info
				">
				<Add size="1.5em" />
			</span>
			<ul>
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
		</div>
	);
}
