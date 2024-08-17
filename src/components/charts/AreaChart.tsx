import React from "react";
import dynamic from "next/dynamic";
import merge from "deepmerge";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface AreaChartProps {
	height?: number;
	series: object[];
	colors: string | string[];
	options?: object;
	darkMode?: boolean;
}

export function AreaChart({
	height = 350,
	series,
	colors,
	options,
	darkMode = false,
}: AreaChartProps) {
	const chartOptions = React.useMemo(
		() => ({
			colors,
			...merge(
				{
					chart: {
						height: height,
						type: "area",
						zoom: {
							enabled: false,
						},
						toolbar: {
							show: false,
						},
						background: darkMode ? "#333" : "#ffffff",
					},
					dataLabels: {
						enabled: false,
					},
					stroke: {
						curve: "smooth",
						width: 2,
					},
					grid: {
						show: true,
						borderColor: darkMode ? "#333333" : "#EEEEEE",
						strokeDashArray: 5,
						xaxis: {
							lines: {
								show: true,
							},
						},
						padding: {
							top: 5,
							right: 20,
						},
					},
					tooltip: {
						theme: "dark",
					},
					yaxis: {
						labels: {
							style: {
								colors: "#eee",
								fontSize: "12px",
								fontFamily: "inherit",
								fontWeight: 300,
							},
						},
					},
					xaxis: {
						axisTicks: {
							show: false,
						},
						axisBorder: {
							show: false,
						},
						labels: {
							style: {
								colors: "#eee",
								fontSize: "12px",
								fontFamily: "inherit",
								fontWeight: 300,
							},
						},
					},
					fill: {
						type: "gradient",
						gradient: {
							shadeIntensity: 1,
							opacityFrom: 0.4,
							opacityTo: 0,
							stops: [0, 90, 100],
						},
					},
				},
				options || {},
			),
		}),
		[height, colors, options, darkMode],
	);

	return (
		<Chart type="area" height={height} series={series} options={chartOptions} />
	);
}
