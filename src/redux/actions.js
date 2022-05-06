import { GET_EVENT_LIST, GET_EVENT_LIST_COMPLETE } from "./constants"

export function getEventListAction() {
    return {
        type: GET_EVENT_LIST,
    }
}

export function getEventListCompleteAction(payload) {
    return {
        type: GET_EVENT_LIST_COMPLETE,
        payload,
    }
}
