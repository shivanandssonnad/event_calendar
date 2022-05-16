import classNames from "classnames";
import { useMemo, useRef, useState } from "react";
import EventListPopup from "./EventListPopup";
import styles from "../styles.module.scss";
import { getEventColorClass, getStyleForEvent } from "../utils";
import EventTypeIcon from "./EventTypeIcon";

function MultipleEvents(props) {
    const { className, eventDetails, row, index, onClick } = props;
    const { similarEvents: events, impactId } = eventDetails;
    const length = events.length;
    const anchorEl = useRef(null);
    const [open, setOpen] = useState(false);

    function handleToggleOpen() {
        setOpen(!open);
    }

    const { style, classes } = useMemo(
        () => getStyleForEvent(eventDetails, row, index),
        [eventDetails, row, index]
    );

    const impactClass = useMemo(() => getEventColorClass(impactId), [impactId]);

    return (
        <>
            <div
                ref={anchorEl}
                style={{
                    ...style,
                    gridTemplateColumns: `repeat(${length}, 15px)`
                }}
                className={classNames(classes, className, impactClass, styles.event)}
                onClick={handleToggleOpen}
            >
                {events.map((each) => (
                    <div key={each.eventId}>
                        <EventTypeIcon
                            key={each.eventId}
                            eventTypeId={each.typeId}
                        />
                    </div>
                ))}
            </div>
            <EventListPopup
                open={open}
                anchorEl={anchorEl}
                events={events}
                onClick={onClick}
                onClose={handleToggleOpen}
            />
        </>
    );
}

export default MultipleEvents;