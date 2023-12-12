import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SelectedFilters } from "../../components/forms/Filters";
import dataApi, { Data } from "../../api/data";
import WatherApi, { CurrentWeatherData } from "../../api/currentWeather";
import FindCityApi from "../../api/findCity";
import FiveDaysApi, {
	ApiFiveProps,
	CurrentFiveDaysData,
} from "../../api/fiveDays";

export const defaultFilters: SelectedFilters = {
	filters: {
		text: "",
		unit: "Metric",
	},
	sort: {
		sorttype: "city",
		sortdirection: "asc",
	},
};

export interface InitialState {
	loading: boolean;
	data: Data[];
	filters: SelectedFilters;
	error?: string;
	currentWeatherData?: CurrentWeatherData;
	currentFiveDaysData?: CurrentFiveDaysData;
}

const initialState: InitialState = {
	loading: false,
	data: [],
	filters: defaultFilters,
	error: undefined,
	currentWeatherData: undefined,
	currentFiveDaysData: undefined,
};

// get the preliminary information about the cities (MOC data)
export const getData = createAsyncThunk(
	"items/getData",
	async (filters: SelectedFilters, thunkAPI) => {
		const response = dataApi.get(filters.filters, filters.sort);
		return response.data;
	}
);

// get the city key from accuweather.com - Using this key, we can get the weather data in the specific selected city.
export const findCity = createAsyncThunk(
	"items/findCity",
	async (city: string, thunkAPI) => {
		const response = await FindCityApi.get(city);
		return response.data;
	}
);

// get the current weather data in the specific selected city.
export const getCurrentWeather = createAsyncThunk(
	"items/getCurrentWeather",
	async (key: string, thunkAPI) => {
		const response = await WatherApi.get(key, true);
		return response.data;
	}
);

// get the a 5-day forecast data in the specific selected city.
export const getFiveDays = createAsyncThunk(
	"items/getFiveDays",
	async (data: ApiFiveProps, thunkAPI) => {
		const response: any = await FiveDaysApi.get(data.key, data.unit);
		return response.data.DailyForecasts;
	}
);

const dataSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		onFilter: (state, { payload }) => {
			state.loading = true;
			state.filters = payload;
		},
	},
	extraReducers: (builder) => {
		// get MOC data Cases
		builder.addCase(getData.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getData.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		});
		builder.addCase(getData.rejected, (state, action) => {
			state.error = "Error: Unable to patch data. Try again later.";
			state.loading = false;
		});

		// get city key Cases
		builder.addCase(findCity.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(findCity.fulfilled, (state, action: any) => {
			state.loading = false;
			// patch error: Because the accuweather.com API key we use is a free key for developers. There is a limit of 50 requests per day.
			if (action.payload?.Code === "ServiceUnavailable") {
				state.error = `Error: ${action.payload?.Message}`;
			} else {
				// get the key and adds it to the correct city.
				const objIndex = state.data.findIndex(
					(item) => item.city == action.payload?.[0].EnglishName
				);
				state.error = undefined;
				state.data[objIndex].Key = action.payload[0].Key;
			}
		});
		builder.addCase(findCity.rejected, (state, action) => {
			state.error = "Error: Unable to patch data. Try again later.";
			state.loading = false;
		});

		// get Current Weather data Cases
		builder.addCase(getCurrentWeather.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getCurrentWeather.fulfilled, (state, action: any) => {
			state.loading = false;
			if (action.payload?.Code === "ServiceUnavailable") {
				state.error = `Error: ${action.payload?.Message}`;
			} else {
				state.error = undefined;
				state.currentWeatherData = action.payload;
			}
		});
		builder.addCase(getCurrentWeather.rejected, (state, action) => {
			state.error = "Error: Unable to patch data. Try again later.";
			state.loading = false;
		});

		// get Five Days data Cases
		builder.addCase(getFiveDays.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getFiveDays.fulfilled, (state, action) => {
			state.loading = false;
			if (action.payload?.Code === "ServiceUnavailable") {
				state.error = `Error: ${action.payload?.Message}`;
			} else {
				state.error = undefined;
				state.currentFiveDaysData = action.payload;
			}
		});
		builder.addCase(getFiveDays.rejected, (state, action) => {
			state.error = "Error: Unable to patch data. Try again later.";
			state.loading = false;
		});
	},
});

export const { onFilter } = dataSlice.actions;

export default dataSlice.reducer;
