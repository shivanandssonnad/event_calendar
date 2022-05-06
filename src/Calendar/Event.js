import React, { useMemo, useRef, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Icon from "../Icons";

import { getStyleForEvent } from "./utils";
import { EVENT_TYPE } from "../constants";

import styles from "./styles.module.scss";
import EventListPopup from "./EventListPopup";

function EventTypeIcon(props) {
  const { eventTypeId } = props;
  const typeConfig = EVENT_TYPE[eventTypeId] || {};
  return <Icon name={typeConfig.icon} height={20} width={20} />;
}

function SingleEvent(props) {
  const { style, className, events } = props;
  const [event] = events || [];
  const { name, typeId, eventId } = event || {};
  const typeConfig = EVENT_TYPE[typeId] || {};

  function handleClick() {
    props.onClick(eventId)
  }

  return (
    <div style={style} className={classNames(className, styles.event)} onClick={handleClick}>
      <div className={styles.event_icon}>
        <EventTypeIcon eventTypeId={typeId} />
      </div>
      <div className={styles.event_name_container}>
        <span className={styles.event_name}>{name}</span>
        <span className={styles.event_type}>{typeConfig.name}</span>
      </div>
    </div>
  );
}

function MultipleEvents(props) {
  const { style, className, events } = props;
  const length = events.length;
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  function handleToggleOpen() {
    setOpen(!open);
  }

  return (
    <div
      ref={anchorEl}
      style={{
        ...style,
        gridTemplateColumns: `repeat(${length}, 15px)`
      }}
      className={classNames(className, styles.event)}
      onClick={handleToggleOpen}
    >
      {events.map((each) => (
        <div key={each.eventId} className={styles.event_icon}>
          <EventTypeIcon
            key={each.eventId}
            eventTypeId={each.typeId}
          />
        </div>
      ))}
      <EventListPopup
        open={open}
        anchorEl={anchorEl}
        events={events}
        onClick={props.onClick}
      />
    </div>
  );
}

function Event(props) {
  const { eventDetails, row, index } = props;
  const { similarEvents } = eventDetails;

  const { style, classes } = useMemo(
    () => getStyleForEvent(eventDetails, row, index),
    [eventDetails, row, index]
  );

  const Component = useMemo(() => {
    if (similarEvents.length > 1) return MultipleEvents;
    return SingleEvent;
  }, [similarEvents]);

  return (
    <Component
      className={classes}
      style={style}
      events={similarEvents}
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
