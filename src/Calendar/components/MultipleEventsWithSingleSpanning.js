import { useMemo } from "react";
import classNames from "classnames";

import EventTile from "./EventTile";

import { getStyleForEvent } from "../utils";

import styles from "../styles.module.scss";
import ShowMoreEvent from "./ShowMoreEvent";

function MultipleEventsWithSingleSpanning(props) {
    const { className, eventDetails, row, index, onClick } = props;
    const { similarEvents: events } = eventDetails;
    const eventsToShowOnUI = events.slice(0, 2);
    const eventsToShowInShowMore = events.slice(2);

    const { style, classes } = useMemo(
        () => getStyleForEvent(eventDetails, row, index),
        [eventDetails, row, index]
    );

    return (
        <div
            style={style}
            className={classNames(className, classes, styles.event, styles.event_tile_container)}
        >
            {eventsToShowOnUI.map(each => (
                <EventTile
                    key={each.eventId}
                    onClick={onClick}
                    event={each}
                />
            ))}
            {eventsToShowInShowMore.length && (
                <ShowMoreEvent
                    events={eventsToShowInShowMore}
                />
            )}
        </div>
    );
}

export default MultipleEventsWithSingleSpanning;
