import { useMemo } from "react";
import { HEIGHT, TOP_PADDING } from "../constants";
import EventRows from "./EventRows";
import styles from "./styles.module.scss";
import { getCalendarEventsCityId } from "./utils";

function CityRow(props) {
  const { city, dateList, colStyle, events, month } = props;
  const { id: cityId } = city;
  const [eventRows, showMoreEventRow, rowHeight] = useMemo(() => {
    const {
      eventRows: rows,
      showMoreEventRow: showMoreRow
    } = getCalendarEventsCityId(events, cityId, month);

    let count = rows.length;
    if (showMoreRow.length) {
      count = count + 1;
    }
    const height = count * (HEIGHT + TOP_PADDING) + TOP_PADDING;
    return [rows, showMoreRow, height];
  }, [events, cityId, month]);

  const transformedStyle = {
    ...colStyle,
    height: `${rowHeight}px`
  };
  return (
    <tr className={styles.city_row_container}>
      <td
        style={transformedStyle}
        className={`${styles.city_name_column} ${styles.sticky_left}`}
      >
        {city.name}
      </td>
      {dateList.map((each) => (
        <td key={`${cityId}_${each.dateStr}`} style={transformedStyle} />
      ))}
      <EventRows
        eventRows={eventRows}
        showMoreEventRow={showMoreEventRow}
        cityId={city.id}
      />
    </tr>
  );
}

export default CityRow;
