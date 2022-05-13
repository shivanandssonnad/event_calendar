import React from "react";
import PropTypes from "prop-types";

import EventRow from "./EventRow";

function EventRows(props) {
  const { eventRows, cityId } = props;
  return (
    <div>
      {eventRows.map((each, index) => {
        return (
          <EventRow
            key={`${cityId} ${index}`}
            rowIndex={index} events={each}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
}

EventRows.propTypes = {
  eventRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
  showMoreEventRow: PropTypes.arrayOf(PropTypes.shape),
  cityId: PropTypes.number,
  onClick: PropTypes.func,
};

export default EventRows;
