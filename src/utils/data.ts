/**
 * Processes engagement data by calculating open rates and click-through rates.
 */
export function processEngagementData(rawData: any[]) {
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
}
/**
 * Processes raw data to identify the top 5 performing newsletter editions based on open rate.
 */
export function processTopPerformingEditions(rawData: any[]) {
	const editions = rawData.map((item) => ({
		date: item.date,
		subjectLine: `Newsletter ${item.date}`,
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
	return editions.sort((a, b) => b.openRate - a.openRate).slice(0, 5);
}

/**
 * Calculates the number of new subscribers and percentage change over a specified period.
 */
export function calculateNewSubscribers(
	processedData: any[],
	startDate: string,
	endDate: string,
) {
	const currentPeriodSubscribers = processedData
		.filter((item) => item.date >= startDate && item.date <= endDate)
		.reduce((sum, item) => sum + item.uniqueDelivered, 0);

	const previousPeriodStart = new Date(startDate);
	previousPeriodStart.setDate(previousPeriodStart.getDate() - 7);
	const previousPeriodEnd = new Date(startDate);
	previousPeriodEnd.setDate(previousPeriodEnd.getDate() - 1);

	const previousPeriodSubscribers = processedData
		.filter(
			(item) =>
				item.date >= previousPeriodStart.toISOString().split("T")[0] &&
				item.date <= previousPeriodEnd.toISOString().split("T")[0],
		)
		.reduce((sum, item) => sum + item.uniqueDelivered, 0);

	const percentageChange =
		previousPeriodSubscribers !== 0
			? ((currentPeriodSubscribers - previousPeriodSubscribers) /
					previousPeriodSubscribers) *
				100
			: 0;

	return {
		newSubscribers: currentPeriodSubscribers,
		percentageChange: Math.round(percentageChange * 100) / 100,
	};
}

/**
 * Retrieves the most clicked newsletter links within a specified date range.
 */
export function getMostClickedLinks(
	processedData: any[],
	startDate: string,
	endDate: string,
) {
	return processedData
		.filter((item) => item.date >= startDate && item.date <= endDate)
		.sort((a, b) => b.uniqueClicks - a.uniqueClicks)
		.slice(0, 2)
		.map((item) => ({
			url: `Newsletter ${item.date}`,
			clicks: item.uniqueClicks,
		}));
}
