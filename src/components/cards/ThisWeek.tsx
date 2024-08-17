import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";

interface NewSubscribersCardProps {
	newSubscribers: number;
	percentageChange: number;
}

const NewSubscribersCard: React.FC<NewSubscribersCardProps> = ({
	newSubscribers,
	percentageChange,
}) => {
	return (
		<Card>
			<CardBody className="p-4 flex flex-col h-full justify-between">
				<div className="flex justify-between">
					<div>
						<Typography variant="h6" color="blue-gray">
							New Subscribers This Week
						</Typography>
						<Typography variant="h4" color="blue-gray">
							{newSubscribers}
						</Typography>
					</div>
					<UserPlusIcon className="h-10 w-10 text-blue-500" />
				</div>
				<Typography
					variant="small"
					className={`flex gap-1 ${
						percentageChange >= 0 ? "text-green-500" : "text-red-500"
					}`}
				>
					<span>{Math.abs(percentageChange)}%</span>
					<span>{percentageChange >= 0 ? "increase" : "decrease"}</span>
					<span>vs last week</span>
				</Typography>
			</CardBody>
		</Card>
	);
};

export default NewSubscribersCard;
