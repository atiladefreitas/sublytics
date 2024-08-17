import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Card, Typography, Tooltip } from "@material-tailwind/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

interface TopPerformingEditionsProps {
	dateRange: { start: string; end: string };
	data: any[];
}

interface NewsletterEdition {
	date: string;
	subjectLine: string;
	openRate: number;
	clickThroughRate: number;
}

const TopPerformingEditions: React.FC<TopPerformingEditionsProps> = ({
	dateRange,
	data,
}) => {
	const { engagementData } = useSelector((state: RootState) => state.analytics);

	const processData = (rawData: any[]): NewsletterEdition[] => {
		return rawData
			.filter(
				(item) => item.date >= dateRange.start && item.date <= dateRange.end,
			)
			.map((item) => ({
				date: item.date,
				subjectLine: item.subjectLine || `Newsletter ${item.date}`,
				openRate: Math.min(item.openRate, 100),
				clickThroughRate: item.clickThroughRate,
			}))
			.sort((a, b) => b.openRate - a.openRate)
			.slice(0, 5);
	};

	const topPerformingEditions = processData(engagementData);

	if (topPerformingEditions.length === 0) {
		return (
			<Card className="w-full mt-8">
				<div className="p-6">
					<Typography variant="h5" color="blue-gray">
						No data available for the selected date range.
					</Typography>
				</div>
			</Card>
		);
	}

	return (
		<Card className="w-full mt-8">
			<div className="p-6">
				<Typography variant="h5" color="blue-gray" className="mb-4">
					Top Performing Newsletter Editions
				</Typography>
				<div className="overflow-x-auto rounded-md">
					<table className="w-full min-w-max table-auto">
						<thead>
							<tr>
								<th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal leading-none opacity-70"
									>
										Date
									</Typography>
								</th>
								<th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal leading-none opacity-70"
									>
										Subject Line
									</Typography>
								</th>
								<th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal leading-none opacity-70"
									>
										Open Rate
									</Typography>
								</th>
								<th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal leading-none opacity-70"
									>
										Click Through Rate
									</Typography>
								</th>
							</tr>
						</thead>
						<tbody>
							{topPerformingEditions.map((edition, index) => (
								<tr key={index} className="even:bg-blue-gray-50/50">
									<td className="p-4">
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal text-center"
										>
											{edition.date}
										</Typography>
									</td>
									<td className="p-4">
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal text-center"
										>
											{edition.subjectLine}
										</Typography>
									</td>
									<td className="p-4">
										<div className="flex items-center justify-center">
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal mr-2"
											>
												{edition.openRate}%
											</Typography>
											{edition.openRate === 100 && (
												<Tooltip content="Open Rate capped at 100%. Actual rate may be higher.">
													<ExclamationCircleIcon className="h-5 w-5 text-orange-600" />
												</Tooltip>
											)}
										</div>
									</td>
									<td className="p-4">
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal text-center"
										>
											{edition.clickThroughRate}%
										</Typography>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<Typography variant="small" color="gray" className="mt-4">
					Note: Open Rate is calculated as (Unique Opens / Emails Delivered) *
					100. Click Trough Rate is calculated as (Unique Clicks / Unique Opens)
					* 100.
				</Typography>
			</div>
		</Card>
	);
};

export default TopPerformingEditions;
