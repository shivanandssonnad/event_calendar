import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

import EventRow from "./EventRow";

function EventRows(props) {
  const { eventRows, cityId, showMoreEventRow } = props;
  return (
    <td className={styles.events_container}>
      {eventRows.map((each, index) => {
        return (
          <EventRow key={`${cityId} ${index}`} rowIndex={index} events={each} />
        );
      })}
      <EventRow
        rowIndex={eventRows.length}
        events={showMoreEventRow}
        showMoreRow
      />
    </td>
  );
}

EventRows.propTypes = {
  eventRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
  showMoreEventRow: PropTypes.arrayOf(PropTypes.shape),
  cityId: PropTypes.number
};

export default EventRows;
