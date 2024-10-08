import { Button, Input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

interface DateRangeSelectorProps {
	onDateRangeChange: (dateRange: { start: string; end: string }) => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
	onDateRangeChange,
}) => {
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	useEffect(() => {
		const end = new Date();
		const start = new Date();
		start.setDate(end.getDate() - 14);

		setStartDate(formatDate(start));
		setEndDate(formatDate(end));

		onDateRangeChange({
			start: formatDate(start),
			end: formatDate(end),
		});
	}, [onDateRangeChange]);

	const formatDate = (date: Date): string => {
		return date.toISOString().split("T")[0];
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onDateRangeChange({ start: startDate, end: endDate });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full lg:w-[70%] gap-2 flex flex-col lg:flex-row mb-4 h-fit items-center"
		>
			<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
				<Input
					label="Initial"
					crossOrigin={""}
					type="date"
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
					size="lg"
					className=" bg-white"
				/>
				<Input
					label="End"
					crossOrigin={""}
					type="date"
					value={endDate}
					onChange={(e) => setEndDate(e.target.value)}
					size="lg"
					className="bg-white "
				/>
			</div>
			<Button
				placeholder="apply button"
				size="md"
				type="submit"
				color="blue"
				className="h-fit lg:w-fit w-full"
			>
				Apply
			</Button>
		</form>
	);
};

export default DateRangeSelector;
