import { GET_EVENT_LIST, GET_EVENT_LIST_COMPLETE } from "./constants";

const INITIAL_STATE = {
    initialised: false,
    loading: false,
    error: false,
    list: [],
};

export default function eventCalendarReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_EVENT_LIST: return {
            ...state,
            loading: true,
        };
        case GET_EVENT_LIST_COMPLETE: return {
            ...state,
            loading: false,
            initialised: true,
            ...action.payload,
        }
        default: return state;
    }
}