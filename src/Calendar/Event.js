import React from "react";
import { HEIGHT, PADDING, TOP_PADDING } from "../constants";
import styles from "./styles.module.scss";

function Event(props) {
  const {
    span,
    left,
    row,
    event,
    startDateOverLapping,
    endDateOverLapping
  } = props;
  const { event: eventDetails } = event;
  const { name } = eventDetails;
  const classes = [styles.event];
  const top = row * (HEIGHT + TOP_PADDING) + TOP_PADDING;
  let width = 160 * span - PADDING * 2;
  let leftPosition = 160 * left + PADDING;
  if (startDateOverLapping) {
    leftPosition = leftPosition - PADDING;
    classes.push(styles.start_overlapping);
  }
  if (endDateOverLapping) {
    width = width + PADDING;
    classes.push(styles.end_overlapping);
  }
  return (
    <div
      style={{
        width: `${width}px`,
        left: `${leftPosition}px`,
        top: `${top}px`,
        height: `${HEIGHT}px`
      }}
      className={classes.join(" ")}
    >
      {name}
    </div>
  );
}

export default Event;
