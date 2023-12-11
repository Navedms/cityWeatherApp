import client from "./client";
import api from "./configAPI";

const endpoint = "/locations/v1/cities/search";

const get = (city: string) =>
	client.get(`${endpoint}?apikey=${api.key}&q=${city}`);

export default {
	get,
};
