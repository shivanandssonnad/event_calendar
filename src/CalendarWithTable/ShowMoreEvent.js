import React, { useMemo } from "react";
import { getStyleForEvent } from "./utils";

function ShowMoreEvent(props) {
  const { eventDetails, row, index } = props;
  const { showMoreList } = eventDetails;
  const { style, classes } = useMemo(
    () => getStyleForEvent(eventDetails, row, index, true),
    [eventDetails, row, index]
  );
  return (
    <div style={style} className={classes}>
      & {showMoreList.length} more
    </div>
  );
}

export default ShowMoreEvent;
