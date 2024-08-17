export function processEngagementData(rawData: any[]) {
	return rawData.map((item) => ({
		date: item.date,
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

export function processTopPerformingEditions(rawData: any[]) {
	const editions = rawData.map((item) => ({
		date: item.date,
		subjectLine: `Newsletter ${item.date}`,
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
