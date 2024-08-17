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
	darkMode?: boolean;
}

const EngagementOverview: React.FC<EngagementOverviewProps> = ({
	dateRange,
	darkMode = false,
}) => {
	const { engagementData } = useSelector((state: RootState) => state.analytics);

	useEffect(() => {
		console.log("Engagement Data:", engagementData);
		console.log("Date Range:", dateRange);
	}, [engagementData, dateRange]);

	const processedData = engagementData.filter(
		(item) => item.date >= dateRange.start && item.date <= dateRange.end,
	);

	useEffect(() => {
		console.log("Processed Data:", processedData);
	}, [processedData]);

	const series = [
		{
			name: "Open Rate",
			data: processedData.map((item) => item.openRate || 0),
		},
		{
			name: "Click Through Rate",
			data: processedData.map((item) => item.clickThroughRate || 0),
		},
	];

	const options = {
		xaxis: {
			categories: processedData.map((item) => item.date),
		},
	};

	const averageOpenRate =
		processedData.length > 0
			? processedData.reduce((sum, item) => sum + (item.openRate || 0), 0) /
				processedData.length
			: 0;
	const averageClickThroughRate =
		processedData.length > 0
			? processedData.reduce(
					(sum, item) => sum + (item.clickThroughRate || 0),
					0,
				) / processedData.length
			: 0;

	useEffect(() => {
		console.log("Series:", series);
		console.log("Average Open Rate:", averageOpenRate);
	}, [series, averageOpenRate, averageClickThroughRate]);

	if (processedData.length === 0) {
		return (
			<Card className={`w-full mb-8 ${darkMode ? "bg-[#333] text-white" : ""}`}>
				<CardBody>
					<Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
						No data available for the selected date range.
					</Typography>
				</CardBody>
			</Card>
		);
	}

	return (
		<Card className={`w-full mb-8 ${darkMode ? "bg-[#333] text-white" : ""}`}>
			<CardHeader
				floated={false}
				shadow={false}
				className="rounded-none bg-[#333]"
			>
				<Typography variant="h5" className="text-blue-gray-200">
					Engagement Overview
				</Typography>
				<Typography className="text-blue-gray-200">
					Overview of your newsletter engagement metrics
				</Typography>
			</CardHeader>
			<CardBody className="px-2 pb-0">
				<div className="mb-6 flex items-center justify-between px-4">
					<div>
						<Typography variant="h6" color={darkMode ? "white" : "blue-gray"}>
							Average Open Rate
						</Typography>
						<Typography variant="h4" color={darkMode ? "white" : "blue-gray"}>
							{averageOpenRate.toFixed(2)}%
						</Typography>
					</div>
					<div>
						<Typography variant="h6" color={darkMode ? "white" : "blue-gray"}>
							Average Click-Through Rate
						</Typography>
						<Typography variant="h4" color={darkMode ? "white" : "blue-gray"}>
							{averageClickThroughRate.toFixed(2)}%
						</Typography>
					</div>
					<Chip
						variant="gradient"
						color={averageOpenRate > averageClickThroughRate ? "green" : "red"}
						value={
							averageOpenRate > averageClickThroughRate
								? "Good Open Rate"
								: "Improve CTR"
						}
						className="rounded-full"
					/>
				</div>
				<AreaChart
					height={350}
					series={series}
					colors={["#2196F3", "#4CAF50"]}
					options={options}
					darkMode={darkMode}
				/>
			</CardBody>
		</Card>
	);
};

export default EngagementOverview;
