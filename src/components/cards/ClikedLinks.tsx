import React from "react";
import {
	Card,
	CardBody,
	Typography,
	List,
	ListItem,
} from "@material-tailwind/react";
import { LinkIcon } from "@heroicons/react/24/solid";

interface ClickedLink {
	url: string;
	clicks: number;
}

interface MostClickedLinksCardProps {
	links: ClickedLink[];
}

const MostClickedLinksCard: React.FC<MostClickedLinksCardProps> = ({
	links,
}) => {
	return (
		<Card>
			<CardBody className="p-4">
				<div className="flex items-center justify-between mb-4">
					<Typography variant="h6" color="blue-gray">
						Most Clicked Links
					</Typography>
					<LinkIcon className="h-8 w-8 text-blue-500" />
				</div>
				<List>
					{links.map((link, index) => (
						<ListItem key={index} className="py-1.5">
							<div className="flex items-center justify-between w-full">
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal truncate max-w-[70%]"
								>
									{link.url}
								</Typography>
								<Typography
									variant="small"
									color="blue-gray"
									className="font-medium"
								>
									{link.clicks} clicks
								</Typography>
							</div>
						</ListItem>
					))}
				</List>
			</CardBody>
		</Card>
	);
};

export default MostClickedLinksCard;
