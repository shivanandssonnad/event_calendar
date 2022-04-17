import React from "react";
import PropTypes from "prop-types";

import Event from "./Event";

import styles from "./styles.module.scss";
import ShowMoreEvent from "./ShowMoreEvent";

function EventRow(props) {
  const { rowIndex, events, showMoreRow } = props;
  return (
    <div className={styles.event_row}>
      {events.map((each, index) => {
        if (!showMoreRow) {
          return (
            <Event
              eventDetails={each}
              row={rowIndex}
              index={index}
              key={index}
            />
          );
        }
        return (
          <ShowMoreEvent
            eventDetails={each}
            row={rowIndex}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
}

EventRow.propTypes = {
  rowIndex: PropTypes.number,
  events: PropTypes.arrayOf(PropTypes.shape()),
  showMoreRow: PropTypes.bool
};
export default EventRow;
