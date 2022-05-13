import React, { useMemo } from 'react';
import { Popper, Paper, ClickAwayListener } from '@mui/material';

import { getEventColorClass } from '../utils';

import { CELL_MIN_WIDTH, PADDING } from '../../constants';
import styles from '../styles.module.scss';
import classNames from 'classnames';
import SingleEvent from './SingleEvent';

function EventListPopup(props) {
    const { anchorEl, placement = 'bottom', events, open, onClose, onClick } = props;
    const width = useMemo(() => CELL_MIN_WIDTH - PADDING * 2);

    return (
        <Popper open={open} anchorEl={anchorEl.current} placement={placement}>
            <ClickAwayListener onClickAway={onClose}>
                <Paper sx={{ p: 2 }}>
                    {events.map((each) => (
                        <SingleEvent
                            key={each.eventId}
                            style={{ width: `${width}px ` }}
                            event={each}
                            onClick={onClick}
                            className={classNames(styles.show_more_event, getEventColorClass(each.impactId))}
                        />
                    ))}
                </Paper>
            </ClickAwayListener>
        </Popper>
    )
}

export default EventListPopup;
