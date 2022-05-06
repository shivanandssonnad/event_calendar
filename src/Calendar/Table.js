import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import CityRow from "./CityRow";
import HeaderRow from "./HeaderRow";

import styles from "./styles.module.scss";

function CalendarTable(props) {
  const { monthDateList = [], month, cities, calendarEvents } = props;

  return (
    <div className={styles.calendar_table}>
      <HeaderRow monthDateList={monthDateList} />
      {cities.map((city) => (
        <CityRow
          key={city.id}
          calendarEvents={calendarEvents}
          monthDateList={monthDateList}
          month={month}
          city={city}
          onClickEvent={props.onClickEvent}
        />
      ))}
    </div>
  );
}

CalendarTable.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape()),
  monthDateList: PropTypes.arrayOf(PropTypes.shape()),
  month: PropTypes.shape(),
  calendarEvents: PropTypes.arrayOf(PropTypes.shape()),
  onClickEvent: PropTypes.func,
};

export default CalendarTable;
