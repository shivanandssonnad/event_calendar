import React from "react";
import { CALENDAR_EVENTS, CITIES, HEIGHT, TOP_PADDING } from "../constants";
import EventRows from "./EventRows";
import styles from "./styles.module.scss";
import TableCol from "./TableCol";
import TableRow from "./TableRow";
import { getCalendarEventsCityId } from "./utils";

function CalendarTable(props) {
  const { data = [], month } = props;
  const cityId = 1;
  const eventRows = getCalendarEventsCityId(CALENDAR_EVENTS, cityId, month);
  return (
    <div className={styles.table_container}>
      <TableRow>
        <TableCol headerCol>
          <div className={styles.day}>City Name</div>
        </TableCol>
        {data.map((each) => (
          <TableCol headerCol key={`${each.dateStr} ${each.day}`}>
            <div className={styles.day}>{each.day}</div>
            <div className={styles.date}>{each.dateStr}</div>
          </TableCol>
        ))}
      </TableRow>
      {CITIES.map((city) => {
        const rowCount = cityId === city.id && eventRows.length;
        const height = rowCount * (HEIGHT + TOP_PADDING) + TOP_PADDING;
        return (
          <TableRow key={city.id}>
            <TableCol height={height} dataCol>
              {city.name}
            </TableCol>
            {data.map((each, index) => {
              return (
                <TableCol
                  key={`${cityId} ${index}`}
                  dataCol
                  height={height}
                ></TableCol>
              );
            })}
            {cityId === city.id && <EventRows events={eventRows} />}
          </TableRow>
        );
      })}
    </div>
  );
}

export default CalendarTable;
