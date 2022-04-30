import React, { useMemo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Icon from "../Icons";

import { getStyleForEvent } from "./utils";
import { EVENT_TYPE } from "../constants";

import styles from "./styles.module.scss";

function EventTypeIcon(props) {
  const { eventTypeId } = props;
  const typeConfig = EVENT_TYPE[eventTypeId] || {};
  return <Icon name={typeConfig.icon} height={20} width={20} />;
}

function SingleEvent(props) {
  const { style, className, events } = props;
  const [event] = events;
  const { name, typeId } = event;
  const typeConfig = EVENT_TYPE[typeId] || {};
  return (
    <div style={style} className={classNames(className, styles.event)}>
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
  return (
    <div
      style={{
        ...style,
        gridTemplateColumns: `repeat(${length}, 15px)`
      }}
      className={classNames(className, styles.event)}
    >
      {events.map((each) => (
        <div className={styles.event_icon}>
          <EventTypeIcon eventTypeId={each.typeId} />
        </div>
      ))}
    </div>
  );
}

function Event(props) {
  const { eventDetails, row, index } = props;
  const { events } = eventDetails;

  const { style, classes } = useMemo(
    () => getStyleForEvent(eventDetails, row, index),
    [eventDetails, row, index]
  );

  const Component = useMemo(() => {
    if (events.length > 1) return MultipleEvents;
    return SingleEvent;
  }, [events]);

  return (
    <Component
      className={classes}
      style={style}
      events={events}
      row={row}
      index={index}
    />
  );
}

Event.propTypes = {
  eventDetails: PropTypes.shape(),
  row: PropTypes.number,
  index: PropTypes.number
};

export default Event;
