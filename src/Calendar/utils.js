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

export function getCalendarEventsCityId(calendarEvents, cityId, month) {
  const monthStartDate = month.startDate;
  const monthEndDate = month.endDate;
  const events = calendarEvents
    .map((each) => each.cityId.map((e) => ({ ...each, cityId: e })))
    .flatMap((each) => each)
    .filter((each) => (cityId ? each.cityId === cityId : true))
    .map((each) => {
      let startDateOverLapping = false;
      let endDateOverLapping = false;
      let startDate = parse(each.startDate, "dd/MM/yyyyy", new Date());
      if (isBefore(startDate, monthStartDate)) {
        startDate = monthStartDate;
        startDateOverLapping = true;
      }
      let endDate = parse(each.endDate, "dd/MM/yyyyy", new Date());
      if (isAfter(endDate, monthEndDate)) {
        endDate = monthEndDate;
        endDateOverLapping = true;
      }
      const span =
        differenceInDays(endOfDay(endDate), startOfDay(startDate)) + 1;
      return {
        cityId: each.cityId,
        event: {
          ...each,
          startDate,
          endDate
        },
        startDateOverLapping,
        endDateOverLapping,
        span,
        left: startDate.getDate(),
        right: endDate.getDate()
      };
    })
    .sort((a, b) => {
      const l1 = a.left;
      const l2 = b.left;

      const s1 = a.span;
      const s2 = b.span;
      if (l1 > l2) return 1;
      if (l1 < l2) return -1;
      if (s1 > s2) return -1;
      if (s1 < s2) return 1;
      return 0;
    });
  const eventRows = getEventsByRow(events);
  return eventRows;
}
