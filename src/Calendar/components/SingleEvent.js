import { useMemo } from "react";
import classNames from "classnames"

import EventTypeIcon from "./EventTypeIcon";

import { getEventColorClass } from "../utils";
import styles from "../styles.module.scss";
import { EVENT_TYPE } from "../../constants";

function SingleEvent(props) {
    const { style, className, event, onClick } = props;
    const { impactId, eventId, typeId, name } = event;

    const typeConfig = EVENT_TYPE[typeId] || {};

    const impactClass = useMemo(() => getEventColorClass(impactId), [impactId]);

    function handleClick() {
        onClick(eventId)
    }

    return (
        <div style={style} className={classNames(className, impactClass, styles.event)} onClick={handleClick}>
            <div>
                <EventTypeIcon eventTypeId={typeId} />
            </div>
            <div className={styles.event_name_container}>
                <span className={styles.event_name}>{name}</span>
                <span className={styles.event_type}>{typeConfig.name}</span>
            </div>
        </div>
    )
}

export default SingleEvent;
