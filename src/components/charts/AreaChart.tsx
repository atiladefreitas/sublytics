import React from "react";
import dynamic from "next/dynamic";
import merge from "deepmerge";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface AreaChartProps {
	height?: number;
	series: ApexAxisChartSeries;
	colors: string | string[];
	options?: ApexOptions;
}

export function AreaChart({
	height = 350,
	series,
	colors,
	options,
}: AreaChartProps) {
	const chartOptions: ApexOptions = React.useMemo(
		() =>
			merge(
				{
					chart: {
						height: height,
						type: "area" as const,
						zoom: {
							enabled: false,
						},
						toolbar: {
							show: false,
						},
					},
					colors: colors,
					dataLabels: {
						enabled: false,
					},
					stroke: {
						curve: "smooth" as const,
						width: 2,
					},
					grid: {
						show: true,
						borderColor: "#EEEEEE",
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
						theme: "light" as const,
					},
					yaxis: {
						labels: {
							style: {
								colors: "#757575",
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
								colors: "#757575",
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
		[height, colors, options],
	);

	return (
		<Chart type="area" height={height} series={series} options={chartOptions} />
	);
}
