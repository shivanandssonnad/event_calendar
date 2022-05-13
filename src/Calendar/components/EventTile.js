import classNames from "classnames"
import { getEventColorClass } from "../utils"
import styles from "../styles.module.scss";
import EventTypeIcon from "./EventTypeIcon";

function EventTile(props) {
    const { event } = props;
    const impactClass = getEventColorClass(event.impactId)

    function handleClick() {
        props.onClick(event.eventId);
    }
    return (
        <div onClick={handleClick} className={classNames(styles.event_icon, impactClass)}>
            <EventTypeIcon eventTypeId={event.typeId} />
        </div>
    )
}

export default EventTile;
