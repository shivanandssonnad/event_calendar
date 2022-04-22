import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { getStyleForEvent } from "./utils";

function Event(props) {
  const { eventDetails, row, index } = props;
  const { events } = eventDetails;
  let name = "";
  if (events.length === 1) {
    name = events[0].name;
  } else {
    name = `${events[0].name} and ${events.length - 1} more`;
  }
  const { style, classes } = useMemo(
    () => getStyleForEvent(eventDetails, row, index),
    [eventDetails, row, index]
  );
  return (
    <div style={style} className={classes}>
      {name}
    </div>
  );
}

Event.propTypes = {
  eventDetails: PropTypes.shape(),
  row: PropTypes.number,
  index: PropTypes.number
};

export default Event;
