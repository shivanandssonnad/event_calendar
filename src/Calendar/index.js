import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

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
            <EventImpactName impactConfig={each} />
          ))}
        </div>
        <div>
          <button>Filters</button>
        </div>
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
