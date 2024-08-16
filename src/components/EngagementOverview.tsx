import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface EngagementOverviewProps {
	dateRange: { start: string; end: string };
}

const EngagementOverview: React.FC<EngagementOverviewProps> = ({
	dateRange,
}) => {
	const { engagementData } = useSelector((state: RootState) => state.analytics);

	const processedData = engagementData.filter(
		(item) => item.date >= dateRange.start && item.date <= dateRange.end,
	);

	const options = {
		chart: {
			id: "engagement-overview",
		},
		xaxis: {
			categories: processedData.map((item) => item.date),
		},
	};

	const series = [
		{
			name: "Open Rate",
			data: processedData.map((item) => item.openRate),
		},
		{
			name: "Click Through Rate",
			data: processedData.map((item) => item.clickThroughRate),
		},
	];

	return (
		<div className="mb-8">
			<h2 className="text-2xl font-bold mb-4">Engagement Overview</h2>
			<Chart options={options} series={series} type="line" height={350} />
		</div>
	);
};

export default EngagementOverview;
