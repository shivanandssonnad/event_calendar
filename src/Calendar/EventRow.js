import React from "react";
import Event from "./Event";
import styles from "./styles.module.scss";

function EventRow(props) {
  return (
    <div className={styles.event_row}>
      {props.events.map((each, index) => (
        <Event {...each} row={props.index} index={index} key={index} />
      ))}
    </div>
  );
}
export default EventRow;
