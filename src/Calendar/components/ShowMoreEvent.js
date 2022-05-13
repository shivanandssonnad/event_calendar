import React, { useRef, useState } from "react";
import { Button } from '@mui/material';

import EventListPopup from "./EventListPopup";

import styles from '../styles.module.scss';
import classNames from "classnames";

function ShowMoreEvent(props) {
  const { events, className, style, onClick } = props;
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <div style={style} className={classNames(className, styles.show_more_container)}>
      <Button className={styles.show_more_button} ref={anchorEl} variant="text" color="info" onClick={toggleOpen}>
        {`& ${events.length} more`}
      </Button>
      <EventListPopup
        open={open}
        anchorEl={anchorEl}
        events={events}
        onClick={onClick}
        onClose={toggleOpen}
      />
    </div>
  );
}

export default ShowMoreEvent;
