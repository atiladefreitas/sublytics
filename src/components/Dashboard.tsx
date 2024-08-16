import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import DateRangeSelector from "./DateRangeSelector";
import EngagementOverview from "./EngagementOverview";

const Dashboard: React.FC = () => {
	const [dateRange, setDateRange] = useState({ start: "", end: "" });
	const { loading, error } = useSelector((state: RootState) => state.analytics);

	return (
		<div>
			<DateRangeSelector onDateRangeChange={setDateRange} />
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error && (
				<>
					<EngagementOverview dateRange={dateRange} />
				</>
			)}
		</div>
	);
};

export default Dashboard;
