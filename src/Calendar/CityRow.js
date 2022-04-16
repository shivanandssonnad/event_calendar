import React, { useMemo } from "react";
import PropTypes from "prop-types";

import EventRows from "./EventRows";
import TableCol from "./TableCol";
import TableRow from "./TableRow";

import { getCalendarEventsCityId } from "./utils";

import { HEIGHT, TOP_PADDING } from "../constants";

import styles from "./styles.module.scss";

function CityRow(props) {
  const { city, monthDateList, month, calendarEvents } = props;
  const { id: cityId } = city;

  const [eventRows, rowHeight] = useMemo(() => {
    const rows = getCalendarEventsCityId(calendarEvents, cityId, month);
    const count = rows.length;
    const height = count * (HEIGHT + TOP_PADDING) + TOP_PADDING;
    return [rows, height];
  }, [calendarEvents, cityId, month]);

  return (
    <TableRow>
      <TableCol className={styles.city_name_data} height={rowHeight} dataCol>
        {city.name}
      </TableCol>
      {monthDateList.map((each) => {
        return (
          <TableCol
            key={`${city.id} ${each.dateStr}`}
            dataCol
            height={rowHeight}
          ></TableCol>
        );
      })}
      <EventRows eventRows={eventRows} cityId={city.id} />
    </TableRow>
  );
}

CityRow.propTypes = {
  city: PropTypes.shape(),
  monthDateList: PropTypes.arrayOf(PropTypes.shape()),
  month: PropTypes.shape(),
  calendarEvents: PropTypes.arrayOf(PropTypes.shape())
};

export default CityRow;
