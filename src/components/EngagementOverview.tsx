import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AreaChart } from "./charts/AreaChart";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Chip,
} from "@material-tailwind/react";

interface EngagementOverviewProps {
	dateRange: { start: string; end: string };
	data: any[];
}

interface ProcessedEngagementData {
	date: string;
	uniqueDelivered: number;
	uniqueOpened: number;
	uniqueClicks: number;
	openRate: number;
	clickThroughRate: number;
}

const EngagementOverview: React.FC<EngagementOverviewProps> = ({
	dateRange,
	data,
}) => {
	const { engagementData } = useSelector((state: RootState) => state.analytics);

	const processData = (rawData: any[]): ProcessedEngagementData[] => {
		return rawData.map((item) => ({
			date: item.date,
			uniqueDelivered: item.uniqueDelivered,
			uniqueOpened: item.uniqueOpened,
			uniqueClicks: item.uniqueClicks,
			openRate:
				item.uniqueDelivered > 0
					? Math.round((item.uniqueOpened / item.uniqueDelivered) * 100)
					: 0,
			clickThroughRate:
				item.uniqueOpened > 0
					? Math.round((item.uniqueClicks / item.uniqueOpened) * 100)
					: 0,
		}));
	};

	const processedData = processData(data).filter(
		(item) => item.date >= dateRange.start && item.date <= dateRange.end,
	);

	useEffect(() => {
		console.log("Processed Data:", processedData);
	}, [processedData]);

	const series = [
		{
			name: "Unique Delivered",
			data: processedData.map((item) => item.uniqueDelivered),
		},
		{
			name: "Unique Opened",
			data: processedData.map((item) => item.uniqueOpened),
		},
		{
			name: "Unique Clicks",
			data: processedData.map((item) => item.uniqueClicks),
		},
		{
			name: "Open Rate",
			data: processedData.map((item) => item.openRate),
		},
		{
			name: "Click Through Rate",
			data: processedData.map((item) => item.clickThroughRate),
		},
	];

	const options = {
		xaxis: {
			categories: processedData.map((item) => item.date),
		},
		yaxis: [
			{
				title: {
					text: "Event Count",
				},
			},
			{
				opposite: true,
				title: {
					text: "Rate (%)",
				},
			},
		],
	};

	const calculateAverage = (metric: keyof ProcessedEngagementData) =>
		processedData.length > 0
			? processedData.reduce((sum, item) => sum + item[metric], 0) /
				processedData.length
			: 0;

	const averages = {
		uniqueDelivered: Math.round(calculateAverage("uniqueDelivered")),
		uniqueOpened: Math.round(calculateAverage("uniqueOpened")),
		uniqueClicks: Math.round(calculateAverage("uniqueClicks")),
		openRate: calculateAverage("openRate").toFixed(2),
		clickThroughRate: calculateAverage("clickThroughRate").toFixed(2),
	};

	useEffect(() => {
		console.log("Averages:", averages);
	}, [averages]);

	if (processedData.length === 0) {
		return (
			<Card className="w-full mb-8">
				<CardBody>
					<Typography variant="h5" color="blue-gray">
						No data available for the selected date range.
					</Typography>
				</CardBody>
			</Card>
		);
	}

	return (
		<Card className="w-full mb-8">
			<CardHeader floated={false} shadow={false} className="rounded-none">
				<div className="mb-4 flex items-center justify-between gap-8">
					<div>
						<Typography variant="h5" color="blue-gray">
							Engagement Overview
						</Typography>
						<Typography color="gray" className="mt-1 font-normal">
							Overview of your newsletter engagement metrics
						</Typography>
					</div>
				</div>
			</CardHeader>
			<CardBody className="px-2 pb-0">
				<div className="mb-6 grid grid-cols-3 gap-4 px-4">
					<div>
						<Typography variant="h6" color="blue-gray">
							Avg. Unique Delivered
						</Typography>
						<Typography variant="h4" color="blue-gray">
							{averages.uniqueDelivered}
						</Typography>
					</div>
					<div>
						<Typography variant="h6" color="blue-gray">
							Avg. Unique Opened
						</Typography>
						<Typography variant="h4" color="blue-gray">
							{averages.uniqueOpened}
						</Typography>
					</div>
					<div>
						<Typography variant="h6" color="blue-gray">
							Avg. Unique Clicks
						</Typography>
						<Typography variant="h4" color="blue-gray">
							{averages.uniqueClicks}
						</Typography>
					</div>
					<div>
						<Typography variant="h6" color="blue-gray">
							Average Open Rate
						</Typography>
						<Typography variant="h4" color="blue-gray">
							{averages.openRate}%
						</Typography>
					</div>
					<div>
						<Typography variant="h6" color="blue-gray">
							Average Click-Through Rate
						</Typography>
						<Typography variant="h4" color="blue-gray">
							{averages.clickThroughRate}%
						</Typography>
					</div>
					<div className="flex items-center justify-center">
						<Chip
							variant="gradient"
							color={
								Number(averages.openRate) > Number(averages.clickThroughRate)
									? "green"
									: "red"
							}
							value={
								Number(averages.openRate) > Number(averages.clickThroughRate)
									? "Good Open Rate"
									: "Improve CTR"
							}
							className="rounded-full"
						/>
					</div>
				</div>
				<AreaChart
					height={350}
					series={series}
					colors={["#2196F3", "#4CAF50", "#FFC107", "#9C27B0", "#FF5722"]}
					options={options}
				/>
			</CardBody>
		</Card>
	);
};

export default EngagementOverview;
