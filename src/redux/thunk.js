import { CALENDAR_EVENTS } from "../constants";
import { fetchEventList } from "../endpoints";
import { getEventListAction, getEventListCompleteAction } from "./actions"

export function getEventListThunkAction(request) {
    return async (dispatch) => {
        dispatch(getEventListAction());
        try {
            const result = await fetchEventList(null, {
                "fromDate" : "30/03/2022",
                "toDate": "04/04/2022",
                "cityIds": [1,2,3]
              })
        } catch (e) {
            dispatch(getEventListCompleteAction({
                success: true,
                error: false,
                list: CALENDAR_EVENTS,
            }))
        }
    }
}