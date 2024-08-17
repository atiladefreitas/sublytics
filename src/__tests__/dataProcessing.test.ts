import {
	processEngagementData,
	processTopPerformingEditions,
} from "@/utils/data";

describe("Data Processing", () => {
	const mockRawData = [
		{
			date: "2023-01-01",
			uniqueDelivered: 1000,
			uniqueOpened: 500,
			uniqueClicks: 250,
		},
		{
			date: "2023-01-02",
			uniqueDelivered: 1200,
			uniqueOpened: 600,
			uniqueClicks: 300,
		},
	];

	test("processEngagementData calculates rates correctly", () => {
		const result = processEngagementData(mockRawData);
		expect(result).toEqual([
			{ date: "2024-01-01", openRate: 50, clickThroughRate: 50 },
			{ date: "2024-01-02", openRate: 50, clickThroughRate: 50 },
		]);
	});

	test("processTopPerformingEditions sorts and limits correctly", () => {
		const result = processTopPerformingEditions(mockRawData);
		expect(result).toHaveLength(2);
		expect(result[0].date).toBe("2024-01-01");
		expect(result[1].date).toBe("2024-01-02");
	});
});
