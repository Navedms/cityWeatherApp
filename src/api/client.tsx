import { create } from "apisauce";
import settings from "./configAPI";

const apiClient = create({
	baseURL: settings.url,
});

export default apiClient;
