import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const generateMockData = () => {
		const startDate = new Date("2024-01-01");
		const endDate = new Date("2024-12-31");
		const data = [];

		for (
			let d = new Date(startDate);
			d <= endDate;
			d.setDate(d.getDate() + 1)
		) {
			data.push({
				date: d.toISOString().split("T")[0],
				uniqueDelivered: Math.floor(Math.random() * 1000) + 500,
				uniqueOpened: Math.floor(Math.random() * 800) + 200,
				uniqueClicks: Math.floor(Math.random() * 500) + 100,
			});
		}

		return data;
	};

	const mockData = generateMockData();

	res.status(200).json(mockData);
}
