import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import CityRow from "./CityRow";
import HeaderRow from "./HeaderRow";

import styles from "./styles.module.scss";

function CalendarTable(props) {
  const { monthDateList = [], month, cities, calendarEvents } = props;
  const tableHeaderRow = useRef(null);
  const tableContent = useRef(null);

  // const handleScroll = useCallback(() => {
  //   const sticky = tableHeaderRow.current.offsetTop - 60;
  //   const pageYOffset = window.pageYOffset;
  //   console.log(sticky, pageYOffset);
  //   if (window.pageYOffset > sticky) {
  //     tableHeaderRow.current.classList.add(styles.sticky);
  //     tableContent.current.classList.add(styles.sticky_content);
  //   } else {
  //     tableHeaderRow.current.classList.remove(styles.sticky);
  //     tableContent.current.classList.remove(styles.sticky_content);
  //   }
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  return (
    <div className={styles.calendar_table}>
      <HeaderRow ref={tableHeaderRow} monthDateList={monthDateList} />
      <div ref={tableContent}>
        {cities.map((city) => (
          <CityRow
            key={city.id}
            calendarEvents={calendarEvents}
            monthDateList={monthDateList}
            month={month}
            city={city}
          />
        ))}
      </div>
    </div>
  );
}

CalendarTable.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape()),
  monthDateList: PropTypes.arrayOf(PropTypes.shape()),
  month: PropTypes.shape(),
  calendarEvents: PropTypes.shape()
};

export default CalendarTable;
