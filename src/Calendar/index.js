import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';

import CalendarTable from "./Table";

import {
  getCurrentMonth,
  getDaysOfMonth,
  getNextMonth,
  getPrevMonth
} from "./utils";

import { CALENDAR_EVENTS, CITIES, EVENT_IMPACT } from "../constants";

import styles from "./styles.module.scss";
import classNames from "classnames";
import Icon from "../Icons";
import EventImpactName from "./EventImpactName";
import { getEventListThunkAction } from "../redux/thunk";
import { selectEventList, selectEventListLoading } from "../redux/selectors";

function Calendar(props) {
  const { currentMonth } = props;
  const initialMonth = useMemo(() => getCurrentMonth(currentMonth), [currentMonth]);
  const initialDates = useMemo(() => getDaysOfMonth(initialMonth.startDate, initialMonth.endDate), [initialMonth]);
  const [month, setMonth] = useState(initialMonth);
  const [dates, setDates] = useState(initialDates);

  const dispatch = useDispatch();

  const loading = useSelector(selectEventListLoading);
  const events = useSelector(selectEventList);

  function handlePrevMonth() {
    setMonth(getPrevMonth(month.startDate));
  }

  function handleNextMonth() {
    setMonth(getNextMonth(month.startDate));
  }

  function handleClickEvent(eventId, cityId) {
    console.log(eventId, cityId);
  }

  useEffect(() => {
    setDates(getDaysOfMonth(month.startDate, month.endDate));
    dispatch(getEventListThunkAction(month.startDate, month.endDate));
  }, [month]);

  return (
    <div className={styles.container}>
      <div
        className={classNames(
          styles.table_text_container,
          styles.table_title_container
        )}
      >
        <span>Event Impact on Sales</span>
      </div>
      <div
        className={classNames(
          styles.table_text_containerm,
          styles.table_action_container
        )}
      >
        <div>
          <button>+ Add</button>
        </div>
        <div className={styles.table_month_container}>
          <span>
            <button onClick={handlePrevMonth}>
              <Icon name="ArrowLeftIcon" width={10} height={10} />
            </button>
          </span>
          <span>&nbsp;{month.monthStr}&nbsp;</span>
          <span>
            <button onClick={handleNextMonth}>
              <Icon name="ArrowRightIcon" width={10} height={10} />
            </button>
          </span>
        </div>
        <div className={styles.event_impact_types_container}>
          {Object.values(EVENT_IMPACT).map((each) => (
            <EventImpactName key={each.value} impactConfig={each} />
          ))}
        </div>
        <div>
          <button>Filters</button>
        </div>
      </div>
      <CalendarTable
        calendarEvents={events}
        cities={CITIES}
        month={month}
        monthDateList={dates}
        onClickEvent={handleClickEvent}
      />
    </div>
  );
}

Calendar.propTypes = {
  currentMonth: PropTypes.shape()
};

export default Calendar;
