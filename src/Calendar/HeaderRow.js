import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import TableCol from "./TableCol";
import TableRow from "./TableRow";

import styles from "./styles.module.scss";

function HeaderRow(props) {
  const { monthDateList } = props;
  const tableHeaderRow = useRef(null);

  // const handleScroll = useCallback(() => {
  //   const sticky = tableHeaderRow.current.offsetTop;
  //   const pageYOffset = window.pageYOffset;
  //   console.log(sticky, pageYOffset);
  //   if (window.pageYOffset > sticky) {
  //     tableHeaderRow.current.classList.add("sticky");
  //   } else {
  //     tableHeaderRow.current.classList.remove("sticky");
  //   }
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  return (
    <TableRow ref={tableHeaderRow}>
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
}

HeaderRow.propTypes = {
  monthDateList: PropTypes.arrayOf(PropTypes.shape())
};

export default HeaderRow;
