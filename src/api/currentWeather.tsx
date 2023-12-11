import client from "./client";
import api from "./configAPI";

const endpoint = "/currentconditions/v1/";

export type Unit = "Metric" | "Imperial";

export interface CurrentWeatherData {
	Temperature: {
		Imperial: { Unit: string; Value: number };
		Metric: { Unit: string; Value: number };
	};
	TemperatureSummary: {
		Past24HourRange: {
			Maximum: {
				Imperial: { Value: number };
				Metric: { Value: number };
			};
			Minimum: {
				Imperial: { Value: number };
				Metric: { Value: number };
			};
		};
	};
	Wind: {
		Speed: {
			Imperial: { Unit: string; Value: number };
			Metric: { Unit: string; Value: number };
		};
	};
	WeatherText: string;
	WeatherIcon: number;
	RelativeHumidity: number;
	UVIndex: string;
}

const get = (key: string, details: boolean) =>
	client.get(
		`${endpoint}/${key}?apikey=${api.key}&language=${api.lang}&details=${details}`
	);

export default {
	get,
};
