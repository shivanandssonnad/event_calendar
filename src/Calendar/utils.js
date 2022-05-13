import {
  endOfMonth,
  addDays,
  startOfMonth,
  format,
  subDays,
  parse,
  differenceInDays,
  endOfDay,
  startOfDay,
  isAfter,
  isBefore
} from "date-fns";

import {
  API_DATE_FORMAT,
  CELL_MIN_WIDTH,
  EVENT_HEIGHT,
  EVENT_RENDERING_TYPE,
  MAX_ROWS_ON_UI,
  PADDING,
  TOP_PADDING,
  UI_DISPLAY_MONTH_FORMAT
} from "../constants";

import styles from "./styles.module.scss";

export function getCurrentMonth(date = new Date()) {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return {
    startDate: start,
    endDate: end,
    monthStr: format(start, UI_DISPLAY_MONTH_FORMAT)
  };
}

export function getNextMonth(currentMonth) {
  const date = currentMonth;
  const lastDateOfCurrentMonth = endOfMonth(date);
  const nextMonthDate = addDays(lastDateOfCurrentMonth, 1);
  const startOfNextMonth = startOfMonth(nextMonthDate);
  const endOfNextMonth = endOfMonth(nextMonthDate);
  const response = {
    startDate: startOfNextMonth,
    endDate: endOfNextMonth,
    monthStr: format(startOfNextMonth, UI_DISPLAY_MONTH_FORMAT)
  };
  return response;
}

export function getPrevMonth(currentMonth) {
  const date = currentMonth;
  const startOfCurrentMonth = startOfMonth(date);
  const prevMonthDate = subDays(startOfCurrentMonth, 1);
  const startOfPrevMonth = startOfMonth(prevMonthDate);
  const endOfPrevMonth = endOfMonth(prevMonthDate);
  const response = {
    startDate: startOfPrevMonth,
    endDate: endOfPrevMonth,
    monthStr: format(startOfPrevMonth, UI_DISPLAY_MONTH_FORMAT)
  };
  return response;
}

export function getDaysOfMonth(startDate, endDate) {
  const currentDate = startOfDay(new Date()).valueOf();
  const start = startDate.getDate();
  const end = endDate.getDate();
  const list = new Array(end).fill(0);
  return list.map((each, index) => {
    const date = addDays(startDate, index);
    const dateValue = startOfDay(date).valueOf();
    const isStartDate = index === start - 1;
    const isEndDate = index === end - 1;
    return {
      date,
      dateStr: format(date, "dd"),
      day: format(date, "EEE"),
      isStartDate,
      isEndDate,
      activeDate: currentDate === dateValue
    };
  });
}

function getEventsByRow(events, result = []) {
  if (events.length === 0) return result;
  const filterBy = [];
  const pendingItems = [];
  const stepResult = events.filter((each) => {
    if (filterBy.includes(each.left)) {
      pendingItems.push(each);
      return false;
    } else {
      for (let i = 0; i < each.span; i++) {
        filterBy.push(each.left + i);
      }
      return true;
    }
  });
  result.push(stepResult);
  return getEventsByRow(pendingItems, result);
}

function handleGroupSimilarEvents(events) {
  const groupedList = events.reduce((acc, curr) => {
    let key = `${curr.left}_${curr.span}_${curr.impactId}`;
    if (curr.span === 1) {
      key = `${curr.left}_${curr.span}`;
    }
    if (acc[key]) {
      acc[key].similarEvents.push(curr.event.event);
      return acc;
    }
    acc[key] = {
      ...curr,
      similarEvents: [curr.event.event],
    };
    return acc;
  }, {});
  return Object.values(groupedList);
}

export function transformEvent(event, month, cityId) {
  const monthStartDate = month.startDate;
  const monthEndDate = month.endDate;
  let startDateOverLapping = false;
  let endDateOverLapping = false;
  let startDate = parse(event.startDate, API_DATE_FORMAT, new Date());
  if (isBefore(startDate, monthStartDate)) {
    startDate = monthStartDate;
    startDateOverLapping = true;
  }
  let endDate = parse(event.endDate, API_DATE_FORMAT, new Date());
  if (isAfter(endDate, monthEndDate)) {
    endDate = monthEndDate;
    endDateOverLapping = true;
  }
  const span = differenceInDays(endOfDay(endDate), startOfDay(startDate)) + 1;
  return {
    cityId,
    eventId: event.eventId,
    impactId: event.impactId,
    typeId: event.eventTypeId,
    startDateOverLapping,
    endDateOverLapping,
    span,
    left: startDate.getDate(),
    right: endDate.getDate(),
    event: {
      ...event,
      event: {
        eventId: event.cityEventId || event.eventId,
        impactId: event.impactId,
        typeId: event.eventTypeId,
        name: event.eventName,
      },
      startDate,
      endDate
    }
  };
}

export function sortByLeftAndSpan(a, b) {
  const l1 = a.left;
  const l2 = b.left;

  const s1 = a.span;
  const s2 = b.span;
  if (l1 > l2) return 1;
  if (l1 < l2) return -1;
  if (s1 > s2) return -1;
  if (s1 < s2) return 1;
  return 0;
}

function separateEventRowsAndShowMoreEvents(eventRows) {
  const [filteredEventRows, showMoreEventRows] = eventRows.reduce(
    (acc, curr, index) => {
      if (index < MAX_ROWS_ON_UI) {
        acc[0].push(curr);
        return acc;
      }
      const rowHasEventsWithMultipleSpan = curr.some((each) => each.span > 1);
      if (rowHasEventsWithMultipleSpan) {
        acc[0].push(curr);
        return acc;
      }
      acc[1].push(curr);
      return acc;
    },
    [[], []]
  );
  const showMoreRowsGroupByDate = showMoreEventRows
    .flatMap((each) => each)
    .reduce((acc, curr) => {
      const key = `${curr.left}_${curr.span}`;
      if (acc[key]) {
        acc[key].showMoreList.push(curr.event);
        return acc;
      }
      acc[key] = {
        ...curr,
        showMoreList: [curr.event]
      };
      return acc;
    }, {});
  const showMoreRowEvents = Object.values(showMoreRowsGroupByDate);
  return [filteredEventRows, showMoreRowEvents];
}

export function addEventRenderingType(groupedEvent) {
  let eventRenderingType = null;
  if (groupedEvent.span === 1 && groupedEvent.similarEvents.length > 1) {
    eventRenderingType = EVENT_RENDERING_TYPE.EVENT_SINGLE_SPAN_WITH_MULTIPLE_EVENTS;
  } else if (groupedEvent.similarEvents.length > 1) {
    eventRenderingType = EVENT_RENDERING_TYPE.EVENT_SPAN_WITH_MULTIPLE_EVENTS
  } else {
    eventRenderingType = EVENT_RENDERING_TYPE.EVENT_SPAN_WITH_SINGLE_EVENT;
  }
  return {
    ...groupedEvent,
    eventRenderingType,
  }
}

export function getCalendarEventsByCityId(calendarEvents, cityId, month) {
  const events = calendarEvents
    .filter((each) => each.cityId === cityId)
    .map(each => each.events)
    .flatMap((each) => each)
    .map((each) => transformEvent(each, month, cityId)) // transform event to required format
    .sort(sortByLeftAndSpan); // sort events by left position and span higher to lower

  const groupedEventList = handleGroupSimilarEvents(events) // group similar events to one event
    .map(each => addEventRenderingType(each));  // add event rendering type to each grouped event

  const eventRows = getEventsByRow(groupedEventList); // convert events list to event rows list to display on UI
  return eventRows;
}

export function getEventColorClass(impactId) {
  switch (impactId) {
    case 0:
      return styles.event_positive;
    case 1:
      return styles.event_mild;
    case 2:
      return styles.event_modarate;
    default:
      return styles.event_high;
  }
}

export function getStyleForEvent(eventDetails, row) {
  const {
    span,
    left,
    startDateOverLapping,
    endDateOverLapping,
  } = eventDetails;
  const classes = [];
  const top = row * (EVENT_HEIGHT + TOP_PADDING) + TOP_PADDING;
  let width = CELL_MIN_WIDTH * span - PADDING * 2;
  let leftPosition = CELL_MIN_WIDTH * left + PADDING;
  if (startDateOverLapping) {
    leftPosition = leftPosition - PADDING;
    width = width + PADDING;
    classes.push(styles.start_overlapping);
  }
  if (endDateOverLapping) {
    width = width + PADDING;
    classes.push(styles.end_overlapping);
  }
  return {
    style: {
      width: `${width}px`,
      left: `${leftPosition}px`,
      top: `${top}px`,
      height: `${EVENT_HEIGHT}px`
    },
    classes: classes.join(" ")
  };
}
