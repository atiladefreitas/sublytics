import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnalyticsState {
	engagementData: Array<{
		date: string;
		openRate: number;
		clickThroughRate: number;
	}>;
	topPerformingEditions: Array<{
		date: string;
		subjectLine: string;
		openRate: number;
		clickThroughRate: number;
	}>;
	loading: boolean;
	error: string | null;
}

const initialState: AnalyticsState = {
	engagementData: [],
	topPerformingEditions: [],
	loading: false,
	error: null,
};

const analyticsSlice = createSlice({
	name: "analytics",
	initialState,
	reducers: {
		setEngagementData: (
			state,
			action: PayloadAction<AnalyticsState["engagementData"]>,
		) => {
			state.engagementData = action.payload;
		},
		setTopPerformingEditions: (
			state,
			action: PayloadAction<AnalyticsState["topPerformingEditions"]>,
		) => {
			state.topPerformingEditions = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
	},
});

export const {
	setEngagementData,
	setTopPerformingEditions,
	setLoading,
	setError,
} = analyticsSlice.actions;

export default analyticsSlice.reducer;
