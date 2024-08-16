import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface TopPerformingEditionsProps {
	dateRange: { start: string; end: string };
}

const TopPerformingEditions: React.FC<TopPerformingEditionsProps> = ({
	dateRange,
}) => {
	const { topPerformingEditions } = useSelector(
		(state: RootState) => state.analytics,
	);

	const processedData = topPerformingEditions.filter(
		(item) => item.date >= dateRange.start && item.date <= dateRange.end,
	);

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Top Performing Editions</h2>
			<table className="w-full border-collapse">
				<thead>
					<tr>
						<th className="border p-2">Subject Line</th>
						<th className="border p-2">Open Rate</th>
						<th className="border p-2">Click Through Rate</th>
					</tr>
				</thead>
				<tbody>
					{processedData.map((item, index) => (
						<tr key={index}>
							<td className="border p-2">{item.subjectLine}</td>
							<td className="border p-2">{item.openRate.toFixed(2)}%</td>
							<td className="border p-2">
								{item.clickThroughRate.toFixed(2)}%
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TopPerformingEditions;
