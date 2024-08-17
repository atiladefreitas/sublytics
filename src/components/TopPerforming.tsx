import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface TopPerformingEditionsProps {
	dateRange: { start: string; end: string };
}

const TopPerformingEditions: React.FC<TopPerformingEditionsProps> = ({
	dateRange,
}) => {
	const { engagementData } = useSelector((state: RootState) => state.analytics);

	// Filter and sort data based on dateRange
	const processedData = engagementData
		.filter(
			(item) => item.date >= dateRange.start && item.date <= dateRange.end,
		)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date, most recent first

	if (processedData.length === 0) {
		return (
			<div className="w-full mt-8 bg-white rounded-lg shadow-md">
				<div className="p-6">
					<h2 className="text-xl font-semibold text-gray-800">
						No data available for the selected date range.
					</h2>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full mt-8 bg-white rounded-lg shadow-md overflow-hidden">
			<div className="p-6">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">
					Newsletter Performance
				</h2>
				<div className="overflow-x-auto">
					<table className="w-full min-w-max table-auto">
						<thead>
							<tr className="bg-gray-100">
								<th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Date
								</th>
								<th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Open Rate
								</th>
								<th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Click Through Rate
								</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{processedData.map((item, index) => (
								<tr
									key={index}
									className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
								>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										{item.date}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										{item.openRate}%
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										{item.clickThroughRate}%
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TopPerformingEditions;
