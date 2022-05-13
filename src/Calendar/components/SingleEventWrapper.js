import { useMemo } from "react";
import classNames from "classnames";

import { getStyleForEvent } from "../utils";
import SingleEvent from "./SingleEvent";

function SingleEventWrapper(props) {
    const { className, eventDetails, row, index, onClick } = props;
    const { similarEvents: events } = eventDetails;
    const [event] = events || [];

    const { style, classes } = useMemo(
        () => getStyleForEvent(eventDetails, row, index),
        [eventDetails, row, index]
    );

    return (
        <SingleEvent
            style={style}
            className={classNames(className, classes)}
            onClick={onClick}
            event={event}
        />
    );
}

export default SingleEventWrapper;
