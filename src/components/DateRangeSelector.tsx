import { useState } from "react";

interface DateRangeSelectorProps {
	onDateRangeChange: (dateRange: { start: string; end: string }) => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
	onDateRangeChange,
}) => {
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onDateRangeChange({ start: startDate, end: endDate });
	};

	return (
		<form onSubmit={handleSubmit} className="mb-4">
			<input
				type="date"
				value={startDate}
				onChange={(e) => setStartDate(e.target.value)}
				className="mr-2 p-2 border rounded"
			/>
			<input
				type="date"
				value={endDate}
				onChange={(e) => setEndDate(e.target.value)}
				className="mr-2 p-2 border rounded"
			/>
			<button
				type="submit"
				className="bg-blue-500 text-white px-4 py-2 rounded"
			>
				Apply
			</button>
		</form>
	);
};

export default DateRangeSelector;
