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
  CELL_MIN_WIDTH,
  HEIGHT,
  MAX_ROWS_ON_UI,
  PADDING,
  TOP_PADDING
} from "../constants";

import styles from "./styles.module.scss";

export function getCurrentMonth(date = new Date(), dateFormat = "MMM yyyy") {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return {
    startDate: start,
    endDate: end,
    monthStr: format(start, "MMM yyyy")
  };
}

export function getNextMonth(currentMonth, dateFormat = "MMM yyyy") {
  const date = currentMonth;
  const lastDateOfCurrentMonth = endOfMonth(date);
  const nextMonthDate = addDays(lastDateOfCurrentMonth, 1);
  const startOfNextMonth = startOfMonth(nextMonthDate);
  const endOfNextMonth = endOfMonth(nextMonthDate);
  const response = {
    startDate: startOfNextMonth,
    endDate: endOfNextMonth,
    monthStr: format(startOfNextMonth, "MMM yyyy")
  };
  return response;
}

export function getPrevMonth(currentMonth, dateFormat = "MMM yyyy") {
  const date = currentMonth;
  const startOfCurrentMonth = startOfMonth(date);
  const prevMonthDate = subDays(startOfCurrentMonth, 1);
  const startOfPrevMonth = startOfMonth(prevMonthDate);
  const endOfPrevMonth = endOfMonth(prevMonthDate);
  const response = {
    startDate: startOfPrevMonth,
    endDate: endOfPrevMonth,
    monthStr: format(startOfPrevMonth, "MMM yyyy")
  };
  return response;
}

export function getDaysOfMonth(startDate, endDate) {
  const start = startDate.getDate();
  const end = endDate.getDate();
  const list = new Array(end).fill(0);
  return list.map((each, index) => {
    const date = addDays(startDate, index);
    const isStartDate = index === start - 1;
    const isEndDate = index === end - 1;
    return {
      date,
      dateStr: format(date, "dd"),
      day: format(date, "EEE"),
      isStartDate,
      isEndDate
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

export function transformEvent(event, month) {
  const monthStartDate = month.startDate;
  const monthEndDate = month.endDate;
  let startDateOverLapping = false;
  let endDateOverLapping = false;
  let startDate = parse(event.startDate, "dd/MM/yyyyy", new Date());
  if (isBefore(startDate, monthStartDate)) {
    startDate = monthStartDate;
    startDateOverLapping = true;
  }
  let endDate = parse(event.endDate, "dd/MM/yyyyy", new Date());
  if (isAfter(endDate, monthEndDate)) {
    endDate = monthEndDate;
    endDateOverLapping = true;
  }
  const span = differenceInDays(endOfDay(endDate), startOfDay(startDate)) + 1;
  return {
    cityId: event.cityId,
    eventId: event.eventId,
    impactId: event.impactId,
    startDateOverLapping,
    endDateOverLapping,
    span,
    left: startDate.getDate(),
    right: endDate.getDate(),
    event: {
      ...event,
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

export function getCalendarEventsCityId(calendarEvents, cityId, month) {
  const events = calendarEvents
    .map((each) => each.cityId.map((e) => ({ ...each, cityId: e })))
    .flatMap((each) => each)
    .filter((each) => each.cityId === cityId)
    .map((each) => transformEvent(each, month))
    .sort(sortByLeftAndSpan);

  const eventRows = getEventsByRow(events);
  console.log("eventRows", eventRows);

  const transformedEventRows = eventRows.reduce(
    (acc, curr, index) => {
      if (index < MAX_ROWS_ON_UI) {
        acc[0].push(curr);
        return acc;
      }
      // console.log(curr);
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
  const showMoreRowsGroupByDate = transformedEventRows[1]
    .flatMap((each) => each)
    .reduce((acc, curr) => {
      const key = `${curr.left}_${curr.span}`;
      if (acc[key]) {
        acc[key].showMoreList.push(curr.event);
        return acc;
      }
      acc[key] = {
        ...curr,
        showMoreList: [curr]
      };
      return acc;
    }, {});
  const showMoreRowEvents = Object.values(showMoreRowsGroupByDate);
  console.log(showMoreRowEvents);
  return {
    eventRows: transformedEventRows[0],
    showMoreEventRow: showMoreRowEvents
  };
}

function getEventColorClass(impactId) {
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
    impactId
  } = eventDetails;
  const classes = [styles.event, getEventColorClass(impactId)];
  const top = row * (HEIGHT + TOP_PADDING) + TOP_PADDING;
  let width = CELL_MIN_WIDTH * span - PADDING * 2;
  let leftPosition = CELL_MIN_WIDTH * left + PADDING;
  if (startDateOverLapping) {
    leftPosition = leftPosition - PADDING;
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
      height: `${HEIGHT}px`
    },
    classes: classes.join(" ")
  };
}
