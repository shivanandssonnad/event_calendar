import styles from "./styles.module.scss";

function HeaderRow(props) {
  const { dateList, colStyle } = props;
  return (
    <thead>
      <tr>
        <th style={colStyle} className={styles.sticky_left}>
          <div className={styles.city_name_header}>City Name</div>
        </th>
        {dateList.map((each) => (
          <th
            style={colStyle}
            className={`${styles.header_col}`}
            key={`${each.dateStr} ${each.day}`}
          >
            <div className={styles.day}>{each.day}</div>
            <div className={styles.date}>{each.dateStr}</div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default HeaderRow;
