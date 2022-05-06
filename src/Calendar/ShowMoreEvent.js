import React, { useMemo, useRef, useState } from "react";
import { getStyleForEvent } from "./utils";
import { Button } from '@mui/material';
import EventListPopup from "./EventListPopup";

function ShowMoreEvent(props) {
  const { eventDetails, row, index } = props;
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);
  const { showMoreList } = eventDetails;
  const { style, classes } = useMemo(
    () => getStyleForEvent(eventDetails, row, index, true),
    [eventDetails, row, index]
  );

  const toggleOpen = () => {
    setOpen(!open);
  }

  const eventList = useMemo(() => {
    if (showMoreList && Array.isArray(showMoreList)) {
      return showMoreList?.map(each => each.event);
    }
    return [];
  }, [showMoreList]);

  return (
    <div style={style} className={classes}>
      <Button ref={anchorEl} variant="text" color="info" onClick={toggleOpen}>
        {`& ${showMoreList.length} more`}
      </Button>
      <EventListPopup
        open={open}
        anchorEl={anchorEl}
        events={eventList}
        onClick={props.onClick}
      />
    </div>
  );
}

export default ShowMoreEvent;
