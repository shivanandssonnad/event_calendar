import React, { forwardRef, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import TableCol from "./TableCol";
import TableRow from "./TableRow";

import styles from "./styles.module.scss";

const HeaderRow = forwardRef((props, ref) => {
  const { monthDateList } = props;

  return (
    <TableRow className={styles.header_row} ref={ref}>
      <TableCol headerCol className={styles.city_name_header}>
        <div>City Name</div>
      </TableCol>
      {monthDateList.map((each) => (
        <TableCol
          headerCol
          className={styles.calendar_date_header}
          key={`${each.dateStr} ${each.day}`}
        >
          <div className={styles.day}>{each.day}</div>
          <div className={styles.date}>{each.dateStr}</div>
        </TableCol>
      ))}
    </TableRow>
  );
});

HeaderRow.propTypes = {
  monthDateList: PropTypes.arrayOf(PropTypes.shape())
};

export default HeaderRow;
