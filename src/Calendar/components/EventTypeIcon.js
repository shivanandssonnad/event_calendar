import { EVENT_TYPE } from "../../constants";
import Icon from "../../Icons";

function EventTypeIcon(props) {
    const { eventTypeId } = props;
    const typeConfig = EVENT_TYPE[eventTypeId] || {};
    return <Icon name={typeConfig.icon} height={20} width={20} />;
}

export default EventTypeIcon;
