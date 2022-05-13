import API, { BASE_URL } from "./apis";
import { createService } from "./utils/serviceFactory";

export const fetchEventList = createService({
    baseUrl: BASE_URL,
    url: API.eventList,
    method: 'GET',
})