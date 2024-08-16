import useSWR from "swr";
import { useDispatch } from "react-redux";
import {
	setEngagementData,
	setTopPerformingEditions,
	setLoading,
	setError,
} from "@/store/analyticsSlice";
import {
	processEngagementData,
	processTopPerformingEditions,
} from "@/utils/data";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useAnalytics() {
	const dispatch = useDispatch();

	const { data, error } = useSWR("/api/analytics", fetcher, {
		onSuccess: (data) => {
			dispatch(setEngagementData(processEngagementData(data)));
			dispatch(setTopPerformingEditions(processTopPerformingEditions(data)));
			dispatch(setLoading(false));
		},
		onError: (err) => {
			dispatch(setError(err.message));
			dispatch(setLoading(false));
		},
	});

	return { data, error };
}
