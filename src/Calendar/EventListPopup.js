import React, { useMemo } from 'react';
import { Popper, Paper } from '@mui/material';

import { getEventColorClass } from './utils';

import { CELL_MIN_WIDTH, PADDING } from '../constants';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Event from './Event';

function EventListPopup(props) {
    const { anchorEl, placement = 'bottom', events, open } = props;
    const width = useMemo(() => CELL_MIN_WIDTH - PADDING * 2);

    return (
        <Popper open={open} anchorEl={anchorEl.current} placement={placement}>
            <Paper sx={{ p: 2 }}>
                {events.map((each) => (
                    <Event.SingleEvent
                        key={each.eventId}
                        style={{ width: `${width}px ` }}
                        events={[each]}
                        onClick={props.onClick}
                        className={classNames(styles.show_more_event, getEventColorClass(each.impactId))}
                    />
                ))}
            </Paper>
        </Popper>
    )
}

export default EventListPopup;
