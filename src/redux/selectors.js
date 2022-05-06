function selectEventListState(state) { return state.event_calendar; }

export function selectEventListLoading(state) {
    return selectEventListState(state).loading || false;
}

export function selectEventListError(state) {
    return selectEventListState(state).error || false;
}

export function selectEventList(state) {
    return selectEventListState(state).list || [];
}