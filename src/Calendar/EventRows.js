import React from "react";
import PropTypes from "prop-types";

import EventRow from "./EventRow";

function EventRows(props) {
  const { eventRows, cityId } = props;
  return (
    <div>
      {eventRows.map((each, index) => {
        return (
          <EventRow key={`${cityId} ${index}`} rowIndex={index} events={each} />
        );
      })}
    </div>
  );
}

EventRows.propTypes = {
  eventRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
  cityId: PropTypes.number
};

export default EventRows;
