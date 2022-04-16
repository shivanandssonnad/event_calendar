import React from "react";
import EventRow from "./EventRow";

function EventRows(props) {
  const { events } = props;
  return (
    <div>
      {events.map((each, index) => {
        return <EventRow key={index} index={index} events={each} />;
      })}
    </div>
  );
}

export default EventRows;
