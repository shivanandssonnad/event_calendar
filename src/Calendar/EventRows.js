import React from "react";
import PropTypes from "prop-types";

import EventRow from "./EventRow";

function EventRows(props) {
  const { eventRows, cityId, showMoreEventRow } = props;
  return (
    <div>
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
    </div>
  );
}

EventRows.propTypes = {
  eventRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
  showMoreEventRow: PropTypes.arrayOf(PropTypes.shape),
  cityId: PropTypes.number
};

export default EventRows;
