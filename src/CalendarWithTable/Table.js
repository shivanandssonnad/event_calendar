import React from "react";
import PropTypes from "prop-types";
import CityRow from "./CityRow";
import HeaderRow from "./HeaderRow";

import { CELL_MIN_HEIGHT, CELL_MIN_WIDTH } from "../constants";

import styles from "./styles.module.scss";

function Table(props) {
  const { monthDateList, cities, calendarEvents, month } = props;
  const colStyle = {
    minWidth: CELL_MIN_WIDTH,
    minHeight: CELL_MIN_HEIGHT
  };
  return (
    <div className={styles.table_container}>
      <table>
        <HeaderRow colStyle={colStyle} dateList={monthDateList} />
        <tbody>
          {cities.map((each) => (
            <CityRow
              key={each.id}
              city={each}
              dateList={monthDateList}
              colStyle={colStyle}
              events={calendarEvents}
              month={month}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  monthDateList: PropTypes.arrayOf(PropTypes.shape()),
  cities: PropTypes.arrayOf(PropTypes.shape()),
  calendarEvents: PropTypes.arrayOf(PropTypes.shape()),
  month: PropTypes.shape()
};

export default Table;
