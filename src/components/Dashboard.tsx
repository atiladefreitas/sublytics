import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import DateRangeSelector from "./DateRangeSelector";
import EngagementOverview from "./EngagementOverview";
import TopPerformingEditions from "./TopPerforming";
import { useAnalytics } from "@/hooks/useAnalytics";
import { InsightDialog } from "./dialogs/InsightDialog";

const Dashboard: React.FC = () => {
	const [dateRange, setDateRange] = useState({ start: "", end: "" });
	const { loading, error } = useSelector((state: RootState) => state.analytics);
	useAnalytics();

	return (
		<div>
			<span className="flex w-full h-[3rem] justify-between mb-4">
				<DateRangeSelector onDateRangeChange={setDateRange} />
				<InsightDialog />
			</span>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error && (
				<>
					<EngagementOverview dateRange={dateRange} darkMode />
					<TopPerformingEditions dateRange={dateRange} />
				</>
			)}
		</div>
	);
};

export default Dashboard;
