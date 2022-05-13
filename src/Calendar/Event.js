import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { EVENT_RENDERING_TYPE } from "../constants";

import MultipleEvents from "./components/MultipleEvents";
import MultipleEventsWithSingleSpanning from "./components/MultipleEventsWithSingleSpanning";
import SingleEventWrapper from "./components/SingleEventWrapper";
import SingleEvent from "./components/SingleEvent";

function Event(props) {
  const { eventDetails, row, index } = props;
  const { eventRenderingType } = eventDetails;

  const Component = useMemo(() => {
    switch(eventRenderingType) {
      case EVENT_RENDERING_TYPE.EVENT_SPAN_WITH_SINGLE_EVENT: return SingleEventWrapper;
      case EVENT_RENDERING_TYPE.EVENT_SPAN_WITH_MULTIPLE_EVENTS: return MultipleEvents;
      default: return MultipleEventsWithSingleSpanning;
    }
  }, [eventRenderingType]);

  return (
    <Component
      eventDetails={eventDetails}
      row={row}
      index={index}
      onClick={props.onClick}
    />
  );
}

Event.propTypes = {
  eventDetails: PropTypes.shape(),
  row: PropTypes.number,
  index: PropTypes.number,
  onClick: PropTypes.func,
};

Event.SingleEvent = SingleEvent;

export default Event;
