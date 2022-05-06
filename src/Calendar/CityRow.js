import React, { useMemo } from "react";
import PropTypes from "prop-types";

import EventRows from "./EventRows";
import TableCol from "./TableCol";
import TableRow from "./TableRow";

import { getCalendarEventsByCityId } from "./utils";

import { CELL_MIN_HEIGHT, EVENT_HEIGHT, TOP_PADDING } from "../constants";

import styles from "./styles.module.scss";

function CityRow(props) {
  const { city, monthDateList, month, calendarEvents } = props;
  const { id: cityId } = city;

  const [eventRows, showMoreEventRow, rowHeight] = useMemo(() => {
    const {
      eventRows: rows,
      showMoreEventRow: showMoreRow
    } = getCalendarEventsByCityId(calendarEvents, cityId, month);
    let count = rows.length;
    if (showMoreRow.length) {
      count = count + 1;
    }
    const height = count * (EVENT_HEIGHT + TOP_PADDING) + TOP_PADDING;
    return [rows, showMoreRow, height];
  }, [calendarEvents, cityId, month]);

  function handleClickEvent(eventId) {
    props.onClickEvent(eventId, cityId)
  }

  return (
    <TableRow
      style={{
        height: `${rowHeight}px`,
        minHeight: `${CELL_MIN_HEIGHT}px`
      }}
    >
      <TableCol className={styles.city_name_data} dataCol>
        {city.name}
      </TableCol>
      {monthDateList.map((each) => {
        return <TableCol key={`${city.id} ${each.dateStr}`} dataCol></TableCol>;
      })}
      <EventRows
        eventRows={eventRows}
        showMoreEventRow={showMoreEventRow}
        cityId={city.id}
        onClick={handleClickEvent}
      />
    </TableRow>
  );
}

CityRow.propTypes = {
  city: PropTypes.shape(),
  monthDateList: PropTypes.arrayOf(PropTypes.shape()),
  month: PropTypes.shape(),
  calendarEvents: PropTypes.arrayOf(PropTypes.shape()),
  onClickEvent: PropTypes.func,
};

export default CityRow;
