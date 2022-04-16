import React from "react";
import PropTypes from "prop-types";

import Event from "./Event";

import styles from "./styles.module.scss";

function EventRow(props) {
  const { rowIndex, events } = props;
  return (
    <div className={styles.event_row}>
      {events.map((each, index) => (
        <Event eventDetails={each} row={rowIndex} index={index} key={index} />
      ))}
    </div>
  );
}

EventRow.propTypes = {
  rowIndex: PropTypes.number,
  events: PropTypes.arrayOf(PropTypes.shape())
};
export default EventRow;
