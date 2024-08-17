import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import DateRangeSelector from "./DateRangeSelector";
import EngagementOverview from "./EngagementOverview";
import TopPerformingEditions from "./TopPerforming";
import { useAnalytics } from "@/hooks/useAnalytics";
import { InsightDialog } from "./dialogs/InsightDialog";
import NewSubscribersCard from "./cards/ThisWeek";
import MostClickedLinksCard from "./cards/ClikedLinks";
import { calculateNewSubscribers, getMostClickedLinks } from "../utils/data";

const Dashboard: React.FC = () => {
	const [dateRange, setDateRange] = useState({ start: "", end: "" });
	const { loading, error, engagementData, topPerformingEditions } = useSelector(
		(state: RootState) => state.analytics,
	);
	useAnalytics();

	const { newSubscribers, percentageChange } = calculateNewSubscribers(
		engagementData,
		dateRange.start,
		dateRange.end,
	);
	const mostClickedLinks = getMostClickedLinks(
		engagementData,
		dateRange.start,
		dateRange.end,
	);

	return (
		<div>
			<span className="flex w-full h-fit lg:h-[3rem] justify-between mb-4 flex-col lg:flex-row ">
				<DateRangeSelector onDateRangeChange={setDateRange} />
				<InsightDialog />
			</span>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error && (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
						<NewSubscribersCard
							newSubscribers={newSubscribers}
							percentageChange={percentageChange}
						/>
						<MostClickedLinksCard links={mostClickedLinks} />
					</div>
					<EngagementOverview dateRange={dateRange} data={engagementData} />
					<TopPerformingEditions
						dateRange={dateRange}
						data={topPerformingEditions}
					/>
				</>
			)}
		</div>
	);
};

export default Dashboard;
