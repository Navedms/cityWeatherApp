import client from "./client";
import api from "./configAPI";

const endpoint = "/forecasts/v1/daily/5day/";

export interface ApiFiveProps {
	key: string;
	unit: boolean;
}
interface Temperature {
	Minimum: {
		Value: number;
		Unit: string;
	};
	Maximum: {
		Value: number;
		Unit: string;
	};
}

export interface CurrentFiveDaysData {
	EpochDate: Date;
	Date: Date;
	Temperature: Temperature;
}

const get = (key: string, unit: boolean) =>
	client.get(
		`${endpoint}/${key}?apikey=${api.key}&language=${api.lang}&metric=${unit}`
	);

export default {
	get,
};
