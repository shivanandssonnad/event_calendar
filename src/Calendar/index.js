import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { Button, IconButton } from "@mui/material";

import CalendarTable from "./Table";
import Icon from "../Icons";
import EventImpactName from "./EventImpactName";

import { getEventListThunkAction } from "../redux/thunk";
import { selectEventList, selectEventListLoading } from "../redux/selectors";
import {
  getCurrentMonth,
  getDaysOfMonth,
  getNextMonth,
  getPrevMonth
} from "./utils";

import { CITIES, EVENT_IMPACT } from "../constants";

import styles from "./styles.module.scss";

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
          <Button variant="contained">+ Add</Button>
        </div>
        <div className={styles.table_month_container}>
          <span>
            <IconButton onClick={handlePrevMonth}>
              <Icon name="ArrowLeftIcon" width={10} height={10} />
            </IconButton>
          </span>
          <span>&nbsp;{month.monthStr}&nbsp;</span>
          <span>
            <IconButton onClick={handlePrevMonth}>
              <Icon name="ArrowRightIcon" width={10} height={10} />
            </IconButton>
          </span>
        </div>
        <div className={styles.event_impact_types_container}>
          {Object.values(EVENT_IMPACT).map((each) => (
            <EventImpactName key={each.value} impactConfig={each} />
          ))}
        </div>
        <div>
          <Button variant="outlined">Filters</Button>
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
