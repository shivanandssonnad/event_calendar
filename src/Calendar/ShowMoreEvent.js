import React, { useMemo } from "react";
import { getStyleForEvent } from "./utils";

function ShowMoreEvent(props) {
  const { eventDetails, row, index } = props;
  const { showMoreList } = eventDetails;
  const { style, classes } = useMemo(
    () => getStyleForEvent(eventDetails, row, index),
    [eventDetails, row, index]
  );
  return (
    <div style={style} className={classes}>
      Show More... {showMoreList.length}
    </div>
  );
}

export default ShowMoreEvent;
