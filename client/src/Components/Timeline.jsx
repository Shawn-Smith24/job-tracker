import React from "react";

const Timeline = () => {
	return (
		<div className="overflow-x-auto mt-10">
			<ol className="bordertext-secondary md:flex md:justify-around md:gap-6 md:border-l-0 md:border-t">
				<li className="">
					<div className="flex-start flex items-center pt-2 md:block md:pt-0">
						<div className="-ml-[5px] mr-3 h-[9px] w-[9px] roundetext-secondary dark:bg-info md:ml-0 md:mr-0 md:-mt-[5px]"></div>
						<p className="mt-2 text-sm  text-secondary">01.07.2021</p>
					</div>
					<div className="mt-2 ml-4 pb-5 md:ml-0">
						<h4 className="mb-1.5 text-md text-accent font-semibold">
							Applied
						</h4>
						<p className="mb-3  text-secondary">asdf</p>
					</div>
				</li>
				<li>
					<div className="flex-start flex items-center pt-2 md:block md:pt-0">
						<div className="-ml-[5px] mr-3 h-[9px] w-[9px] roundetext-secondary dark:bg-info md:ml-0 md:mr-0 md:-mt-[5px]"></div>
						<p className="mt-2 text-sm  text-secondary">13.09.2021</p>
					</div>
					<div className="mt-2 ml-4 pb-5 md:ml-0">
						<h4 className="mb-1.5 text-md text-accent font-semibold">
							Interview 1
						</h4>
						<p className="mb-3 text-secondary">asdf</p>
					</div>
				</li>
				<li>
					<div className="flex-start flex items-center pt-2 md:block md:pt-0">
						<div className="-ml-[5px] mr-3 h-[9px] w-[9px] roundetext-secondary dark:bg-info md:ml-0 md:mr-0 md:-mt-[5px]"></div>
						<p className="mt-2 text-sm  text-secondary">13.10.2021</p>
					</div>
					<div className="mt-2 ml-4 pb-5 md:ml-0">
						<h4 className="mb-1.5 text-md text-accent font-semibold">
							Interview 2
						</h4>
						<p className="mb-3 text-secondary">asdf</p>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default Timeline;
