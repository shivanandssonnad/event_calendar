import React, { useMemo, useState } from "react";
import {
  getCurrentMonth,
  getDaysOfMonth,
  getNextMonth,
  getPrevMonth
} from "./utils";
import CalendarTable from "./Table";

import styles from "./styles.module.scss";

function Calendar(props) {
  const { currentMonth } = props;
  const [month, setMonth] = useState(getCurrentMonth(currentMonth));

  function handlePrevMonth() {
    setMonth(getPrevMonth(month.startDate));
  }

  function handleNextMonth() {
    setMonth(getNextMonth(month.startDate));
  }

  const days = useMemo(() => {
    return getDaysOfMonth(month.startDate, month.endDate);
  }, [month]);

  return (
    <div>
      <div className={styles.table_title_container}>
        <span>
          <button onClick={handlePrevMonth}>Prev</button>
        </span>
        <span>&nbsp;{month.monthStr}&nbsp;</span>
        <span>
          <button onClick={handleNextMonth}>Next</button>
        </span>
      </div>
      <div>
        <CalendarTable month={month} data={days} />
      </div>
    </div>
  );
}

export default Calendar;
