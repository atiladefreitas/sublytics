export function processEngagementData(rawData: any[]) {
	return rawData.map((item) => ({
		date: item.date,
		openRate: (item.uniqueOpened / item.uniqueDelivered) * 100,
		clickThroughRate: (item.uniqueClicks / item.uniqueOpened) * 100,
	}));
}

export function processTopPerformingEditions(rawData: any[]) {
	const editions = rawData.map((item) => ({
		date: item.date,
		subjectLine: `Newsletter ${item.date}`,
		openRate: (item.uniqueOpened / item.uniqueDelivered) * 100,
		clickThroughRate: (item.uniqueClicks / item.uniqueOpened) * 100,
	}));

	return editions.sort((a, b) => b.openRate - a.openRate).slice(0, 5);
}
