import React from "react";
import PropTypes from "prop-types";

import Event from "./Event";

import styles from "./styles.module.scss";

function EventRow(props) {
  const { rowIndex, events } = props;
  return (
    <div className={styles.event_row}>
      {events.map((each, index) => {
          return (
            <Event
              eventDetails={each}
              row={rowIndex}
              index={index}
              key={index}
              onClick={props.onClick}
            />
          );
      })}
    </div>
  );
}

EventRow.propTypes = {
  rowIndex: PropTypes.number,
  events: PropTypes.arrayOf(PropTypes.shape()),
  showMoreRow: PropTypes.bool,
  onClick: PropTypes.func,
};
export default EventRow;
