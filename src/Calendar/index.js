import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

import CalendarTable from "./Table";

import {
  getCurrentMonth,
  getDaysOfMonth,
  getNextMonth,
  getPrevMonth
} from "./utils";

import { CALENDAR_EVENTS, CITIES } from "../constants";

import styles from "./styles.module.scss";

function Calendar(props) {
  const { currentMonth } = props;
  const [month, setMonth] = useState(getCurrentMonth(currentMonth));

  function handlePrevMonth() {
    setMonth(getPrevMonth(month.startDate));
  }

  function handleNextMonth() {
    setMonth(getNextMonth(month.startDate));
  }

  const dates = useMemo(() => {
    return getDaysOfMonth(month.startDate, month.endDate);
  }, [month]);

  return (
    <div className={styles.container}>
      <div className={styles.table_action_container}>
        <span>asjdkhajklsdla asjdkhajklsdlasd adsa</span>
      </div>
      <div className={styles.table_action_container}>
        <span>asjdkhajklsdla asjdkhajklsdlasd adsa</span>
      </div>
      <div className={styles.table_action_container}>
        <span>
          <button onClick={handlePrevMonth}>Prev</button>
        </span>
        <span>&nbsp;{month.monthStr}&nbsp;</span>
        <span>
          <button onClick={handleNextMonth}>Next</button>
        </span>
      </div>
      <CalendarTable
        calendarEvents={CALENDAR_EVENTS}
        cities={CITIES}
        month={month}
        monthDateList={dates}
      />
    </div>
  );
}

Calendar.propTypes = {
  currentMonth: PropTypes.shape()
};

export default Calendar;
